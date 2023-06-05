import { Injectable, OnDestroy } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, take } from 'rxjs/operators';
import { AppState } from '@core/models/appState';
@Injectable({
  providedIn: 'root',
})
export class RedirectToGuard {
  constructor(
    private router: Router,
    private store: Store<AppState>
  ) { }
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
