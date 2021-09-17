import { Injectable } from '@angular/core';
import * as fromApp from '../../../store/app.reduce';
import * as AuthActions from '../../../admin/auth/store/auth.actions';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenExpirationTimer: any;
  constructor(private store: Store<fromApp.AppState>) {}

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
}
