import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthResponseData, CurrentUser } from '@core/models/user';
import { AuthService } from '@core/services/auth/auth.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import * as AuthActions from './auth.actions';
import { DialogService } from '@core/services/dialog.service';
import { DialogType } from '@core/models/dialog.enum';

@Injectable()
export class AuthEffects {
  // private dialogService = inject(DialogService);
   private dialogEnumType = DialogType;
  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private router: Router,
    private authService: AuthService,
    private dialogService: DialogService
  ) {}
  authSignUp$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(AuthActions.signUpStart),
      switchMap((action) => {
        return this.http
          .post<AuthResponseData>(
            `${environment.API_AUTH_FIREBASE_SIGNUP}${environment.API_KEY_FIREBASE}`,
            {
              email: action.email,
              password: action.password,
              returnSecureToken: true,
            }
          )
          .pipe(
            tap((respData) => {
              this.authService.setAutoLogout(+respData.expiresIn * 1000);
            }),
            map((resData) => this.handleAuthentication(resData)),
            catchError(this.handleError.bind(this))
          );
      })
    )
  );

  authLogout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.logout),
        tap(() => {
          localStorage.removeItem('userData');
        })
      ),
    { dispatch: false }
  );

  authLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.autoLogin),
      map(() => {
        const userData: {
          email: string;
          id: string;
          _token: string;
          _tokenExpirationDate: string;
        } = JSON.parse(localStorage.getItem('userData') as any);
        if (!userData) {
          return { type: 'no user available' };
        }
        const loadedUser = new CurrentUser(
          userData.email,
          userData.id,
          userData._token,
          new Date(userData._tokenExpirationDate)
        );
        if (loadedUser.token) {
          const expirationDuration =
            new Date(userData._tokenExpirationDate).getTime() -
            new Date().getTime();
          this.authService.setAutoLogout(expirationDuration);
          return AuthActions.authenticateSuccess({
            email: loadedUser.email,
            userId: loadedUser.id,
            token: loadedUser.token,
            expirationDate: new Date(userData._tokenExpirationDate),
          });
        }
        return { type: 'no token available' };
      })
    )
  );

  authSignIn$ = createEffect(
    (): Observable<any> =>
      this.actions$.pipe(
        ofType(AuthActions.loginStart),
        switchMap((action) => {
          return this.http
            .post<AuthResponseData>(
              `${environment.API_AUTH_FIREBASE_SIGNIN}${environment.API_KEY_FIREBASE}`,
              {
                email: action.email,
                password: action.password,
                returnSecureToken: true,
              }
            )
            .pipe(
              tap((respData) => {
                this.authService.setAutoLogout(+respData.expiresIn * 1000);
              }),
              map((resData) => this.handleAuthentication(resData)),
              catchError(this.handleError.bind(this))
            );
        })
      )
  );
  authRedirect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.authenticateSuccess),
        tap(() => {
          this.router.navigate(['/', 'dashboard']);
        })
      ),
    { dispatch: false }
  );

  authRedirectLogout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.logout),
        tap(() => {
          this.router.navigate(['/', 'dashboard', 'auth']);
          this.authService.clearLogoutTimer();
        })
      ),
    { dispatch: false }
  );

  private handleError(errorResponse: HttpErrorResponse): any {
    let errorMessage = 'An unknown error occurred!';
    if (!errorResponse.error || !errorResponse.error.error) {
      this.dialogService.openDialog(this.dialogEnumType.Error, {data: errorMessage})
      return of(AuthActions.authenticateFail({ errorMessage }));
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
    this.dialogService.openDialog(this.dialogEnumType.Error, {data: errorMessage})
    return of(AuthActions.authenticateFail({ errorMessage }));
  }
  private handleAuthentication(responseData: AuthResponseData): any {
    const expirationDate = new Date(
      new Date().getTime() + +responseData.expiresIn * 1000
    );
    const user = new CurrentUser(
      responseData.email,
      responseData.localId,
      responseData.idToken,
      expirationDate
    );
    localStorage.setItem('userData', JSON.stringify(user));
    return AuthActions.authenticateSuccess({
      email: responseData.email,
      userId: responseData.localId,
      token: responseData.idToken,
      expirationDate,
    });
  }
}
