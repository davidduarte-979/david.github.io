import { Injectable } from '@angular/core';
import {
  HttpContext,
  HttpContextToken,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '@core/services/token.service';

const CHECK_BEARER_TOKEN = new HttpContextToken<boolean>(() => false);
export const checkBearerToken = () => new HttpContext().set(CHECK_BEARER_TOKEN, true);

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.context.get(CHECK_BEARER_TOKEN)) {
      return this.addToken(req, next);
    }
    return next.handle(req);
  }

  private addToken(req: HttpRequest<unknown>, next: HttpHandler) {
    const accessToken = this.tokenService.getToken();
    if (accessToken) {
      const authReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${accessToken}`)
      })
      return next.handle(authReq);
    }
    return next.handle(req);
  }
}
