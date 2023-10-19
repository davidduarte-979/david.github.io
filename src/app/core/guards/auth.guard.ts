import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '@core/services/token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  isAuthenticated = false;
  constructor(
    private router: Router,
    private tokenService: TokenService
  ) { }

  canActivate(): any {
    const isValidToken = this.tokenService.isValidToken()
    if (!isValidToken) {
      this.router.navigate(['/', 'auth'])
      return false
    }
    return true
  }
}
