import { Injectable } from '@angular/core';
import { getCookie, setCookie, removeCookie } from "typescript-cookie";
import jwtDecode, { JwtPayload } from 'jwt-decode';

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

  isValidToken() {
    const token = this.getToken()
    if (!token) {
      return false;
    }
    const decodedToken = jwtDecode<JwtPayload>(token)
    if (!decodedToken || !decodedToken?.exp) {
      return false
    }
    const tokenDate = new Date(0);
    tokenDate.setUTCSeconds(decodedToken.exp);
    const today = new Date();
    return tokenDate.getTime() > today.getTime();
  }
}
