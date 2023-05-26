import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from '../services/auth/auth.service';
import * as fromApp from '../../store/app.reduce';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard  {
  isAuthenticated = false;
  private userSub!: Subscription;
  constructor(
    private auth: AuthService,
    private router: Router,
    private store: Store<fromApp.AppState>
  ) {}
  canActivate(): any {
    return this.store.select('auth').pipe(
      take(1),
      map((authState) => authState.user),
      map((user) => {
        const isAuth = !!user;
        if (isAuth) {
          return true;
        }
        return this.router.createUrlTree(['/', 'dashboard', 'auth']);
      })
    );
  }
}
