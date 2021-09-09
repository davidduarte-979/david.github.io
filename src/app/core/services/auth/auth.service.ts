import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CurrentUser, SignInResponseData, SignUpResponseData, User } from '../../models/user';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = new BehaviorSubject<CurrentUser | null>(null);
  private tokenExpirationTimer: any;
  constructor(private http: HttpClient, private router: Router) {}

  signIn(email: string, password: string): Observable<SignInResponseData> {
    return this.http.post<SignInResponseData>(`${environment.API_AUTH_FIREBASE_SIGNIN}${environment.API_KEY_FIREBASE}`, {
      email,
      password,
      returnSecureToken: true
    })
    .pipe(
      catchError(this.handleError),
      tap(this.handleAuthentication.bind(this)),
    );
  }
  signUp(email: string, password: string): Observable<SignUpResponseData> {
    return this.http.post<SignUpResponseData>(`${environment.API_AUTH_FIREBASE_SIGNUP}${environment.API_KEY_FIREBASE}`,
    {
      email,
      password,
      returnSecureToken: true
    })
    .pipe(
      catchError(this.handleError),
      tap(this.handleAuthentication.bind(this)),
    );
  }

  logout(): void {
   this.user.next(null);
   this.router.navigate(['/', 'dashboard', 'auth']);
   localStorage.removeItem('userData');
   if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
   }
   this.tokenExpirationTimer = null;
  }

  autoLogin(): void {
    const userData: {
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string
    } = JSON.parse(localStorage.getItem('userData') as any);
    if (!userData) {
      return;
    }
    const loadedUser = new CurrentUser(
      userData.email,
      userData.id,
      userData._token,
      new Date(userData._tokenExpirationDate));

    if (loadedUser.token) {
        this.user.next(loadedUser);
        const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
        this.autoLogout(expirationDuration);
      }
  }
  autoLogout(expirationDuration: number): void {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }
  private handleError(errorResponse: HttpErrorResponse): Observable<never> {
    console.log(errorResponse);
    let errorMessage = 'An unknown error occurred!';
    if (!errorResponse.error || !errorResponse.error.error ) {
          return throwError(errorMessage);
        }
    switch (errorResponse.error.error.message) {
          case 'INVALID_PASSWORD':
            errorMessage = 'Passwords is incorrect';
            break;
          case 'EMAIL_NOT_FOUND':
            errorMessage = 'This Email is not register';
            break;
          case 'USER_DISABLED':
            errorMessage = 'This user as been disabled';
            break;
          case 'EMAIL_EXISTS':
              errorMessage = 'This user is already registered';
              break;
          case 'OPERATION_NOT_ALLOWED':
            errorMessage = 'Password sign-in is disabled for this project';
            break;
          case 'TOO_MANY_ATTEMPTS_TRY_LATER':
            errorMessage = 'Too many attempts try later';
            break;
            default:
            errorMessage = errorResponse.error.error.message;
            break;
          }
    return throwError(errorMessage);
  }
  private handleAuthentication(responseData: any ): void {
    const expirationDate = new Date(new Date().getTime() + +responseData.expiresIn * 1000);
    const user = new CurrentUser(
          responseData.email,
          responseData.localId,
          responseData.idToken,
          expirationDate);
    this.user.next(user);
    this.autoLogout(+responseData.expiresIn * 1000);
    localStorage.setItem('userData', JSON.stringify(user));
  }
}
