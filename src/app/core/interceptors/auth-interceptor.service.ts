import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpParams,
  HttpContextToken,
  HttpContext,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { exhaustMap, map, take } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from '@core/models/appState';

const CHECK_AUTH_TOKEN = new HttpContextToken<boolean>(() => false);
export const checkAuthToken = () => new HttpContext().set(CHECK_AUTH_TOKEN, true);

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  constructor(private store: Store<AppState>) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.context.get(CHECK_AUTH_TOKEN)) {
      return this.store.select('auth').pipe(
        take(1),
        map((authState) => authState.user),
        exhaustMap((user: any) => {
          if (!user) {
            return next.handle(req);
          }
          const authReq = req.clone({
            params: new HttpParams().set('auth', user.token),
          });
          return next.handle(authReq);
        })
      );
    }
    return next.handle(req);
  }
}
