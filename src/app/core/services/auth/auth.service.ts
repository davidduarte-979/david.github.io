import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as AuthActions from '../../../store/operations/auth/auth.actions';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { LoginResponseDto, CreateUserDto, User } from '@core/models/user';
import { Observable } from 'rxjs';
import { AppState } from '@core/models/appState';
import { debounceTime } from 'rxjs/operators';

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

  signUp(data: CreateUserDto) {
    return this.http.post<User>(`${environment.SYSTEM_API}/${environment.API_VERSION}/users`, data)
  }

  singIn(email: string, password: string): Observable<LoginResponseDto> {
    return this.http
      .post<LoginResponseDto>(
        `${environment.SYSTEM_API}/${environment.API_VERSION}/auth/login`,
        {
          email: email,
          password: password,
        }
      )
  };

  isEmailAvailable(email: string) {
    return this.http.post<{ isAvailable: boolean }>(`${environment.SYSTEM_API}/${environment.API_VERSION}/auth/is-email-available`, { email })
  }
}
