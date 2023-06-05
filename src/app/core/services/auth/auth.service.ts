import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as AuthActions from '../../../store/operations/auth/auth.actions';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { AuthResponseData } from '@core/models/user';
import { Observable } from 'rxjs';
import { AppState } from '@core/models/appState';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private tokenExpirationTimer: any;
  constructor(private store: Store<AppState>) { }

  setAutoLogout(expirationDuration: number): void {
    this.tokenExpirationTimer = setTimeout(() => {
      this.store.dispatch(AuthActions.logout());
    }, expirationDuration);
  }
  clearLogoutTimer(): void {
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
      this.tokenExpirationTimer = null;
    }
  }

  signUp(email: string, password: string): Observable<AuthResponseData> {
    return this.http
      .post<AuthResponseData>(
        `${environment.API_AUTH_FIREBASE_SIGNUP}${environment.API_KEY_FIREBASE}`,
        {
          email,
          password,
          returnSecureToken: true,
        }
      )
  }

  singIn(email: string, password: string): Observable<AuthResponseData> {
    return this.http
      .post<AuthResponseData>(
        `${environment.API_AUTH_FIREBASE_SIGNIN}${environment.API_KEY_FIREBASE}`,
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
  };
}
