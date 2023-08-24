import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private tokenStorageKey = 'token';

  getToken() {
    return localStorage.getItem(this.tokenStorageKey);
  }

  setToken(token: string) {
    localStorage.setItem(this.tokenStorageKey, JSON.stringify(token));
  }

  removeToken() {
    localStorage.removeItem(this.tokenStorageKey);
  }
}
