import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DialogService } from '@core/services/dialog.service';
import { DialogType } from '@core/models/dialog.enum';
import { Router } from '@angular/router';

@Injectable()
export class HttpErrorHandlerInterceptor implements HttpInterceptor {
  readonly dialogTypeEnum = DialogType;
  constructor(private dialogService: DialogService, private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(catchError((err) => {
        console.log(err);
        this.dialogService.openDialog(this.dialogTypeEnum.Error, { message: 'Something when wrong', code: 400 })
          .afterClosed()
          .subscribe(() => this.router.navigate(['/']))
        return throwError(() => err)
      }))
  }
}
