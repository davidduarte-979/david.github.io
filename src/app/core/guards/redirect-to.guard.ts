import { Injectable, OnDestroy } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from '../services/auth/auth.service';
import * as fromApp from '../../store/app.reduce';
@Injectable({
  providedIn: 'root',
})
export class RedirectToGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router,
    private store: Store<fromApp.AppState>
    ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): any {
       return this.store.select('auth')
       .pipe(
         take(1),
         map((authState) => authState.user),
         map((user) => {
           if (!user) {
            return true;
           }
           return this.router.createUrlTree(['/', 'dashboard']);
         })
       )
  }
}
