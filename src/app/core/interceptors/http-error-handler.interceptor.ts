import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { DialogService } from '@core/services/dialog.service';
import { DialogType } from '@core/models/dialog.enum';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '@core/models/appState';
import * as ProjectAction from '../../store/operations/projects/projects.actions';

@Injectable()
export class HttpErrorHandlerInterceptor implements HttpInterceptor {
  readonly dialogTypeEnum = DialogType;
  constructor(
    private dialogService: DialogService,
    private router: Router,
    private store: Store<AppState>
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(catchError((err) => {
        console.log(err);
        this.dialogService.openDialog(this.dialogTypeEnum.Error, { message: 'Something when wrong', code: 400 })
          .afterClosed()
          .pipe(
            tap(() => this.store.dispatch(ProjectAction.clearError()))
          )
          .subscribe(() => this.router.navigate(['/']))
        return throwError(() => err)
      }))
  }
}
