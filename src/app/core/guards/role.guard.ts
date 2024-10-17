import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '@core/models/appState';
import { map } from 'rxjs/operators';
import { UserRole } from '@core/models/user';

export const roleGuard: CanActivateFn = () => {
  const store = inject(Store<AppState>);
  const router = inject(Router);

  return store.select('auth').pipe(map((auth) => {
    if (auth.user.role === UserRole.Admin) {
      return true;
    } else {
      router.navigate(['/', 'dashboard'])
      return false
    }
  }))
};
