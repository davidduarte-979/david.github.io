import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    const tokenizeReq = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` },
    });
    return next.handle(tokenizeReq).pipe(
      retry(2),
      // handle errors
      catchError((error: HttpErrorResponse) => {
        console.log(`HTTP error ${req.url}`);
        return throwError(error);
      }),
      // profiling
      finalize(() => {
        const profilingMsg = `${req.method} "${req.urlWithParams}" `;
        console.log(profilingMsg);
      })
    );
  }
}
