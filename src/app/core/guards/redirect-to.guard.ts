import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { TokenService } from '@core/services/token.service';
@Injectable({
  providedIn: 'root',
})
export class RedirectToGuard {
  constructor(
    private router: Router,
    private tokenService: TokenService,
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): any {
    const isValidToken = this.tokenService.isValidToken()
    if (isValidToken) {
      this.router.navigate(['/', 'dashboard'])
    }
    return true
  }
}
