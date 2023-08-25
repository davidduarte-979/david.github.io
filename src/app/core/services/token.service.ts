import { Injectable } from '@angular/core';
import { getCookie, setCookie, removeCookie } from "typescript-cookie";

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private tokenStorageKey = 'token';

  getToken() {
    return getCookie(this.tokenStorageKey);
  }

  setToken(token: string) {
    setCookie(this.tokenStorageKey, token, { expires: 365, path: '/' })
  }

  removeToken() {
    removeCookie(this.tokenStorageKey);
  }
}
