import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AutoLoginUser, LoginResponseDto } from '@core/models/user';
import { AuthService } from '@core/services/auth/auth.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import * as AuthActions from './auth.actions';
import { DialogService } from '@core/services/dialog.service';
import { DialogType } from '@core/models/dialog.enum';
import { MatDialogRef } from '@angular/material/dialog';

@Injectable()
export class AuthEffects {
  private dialogService = inject(DialogService);
  private dialogEnumType = DialogType;
  constructor(
    private actions$: Actions,
    private router: Router,
    private authService: AuthService
  ) { }

  authSignUp$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(AuthActions.signUpStart),
      switchMap((action) =>
        this.authService
          .signUp({
            email: action.email,
            lastname: action.lastname,
            firstname: action.firstname,
            password: action.password,
          })
          .pipe(
            tap(() =>
              this.dialogService.openDialog(this.dialogEnumType.Success, {
                message: 'You were succefully Sign Up! please Log in',
              })
            ),
            tap(() => this.router.navigate(['/', 'auth'])),
            tap(() => AuthActions.signUpSuccess()),
            catchError(this.handleError.bind(this))
          )
      )
    )
  );

  authLogout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.logout),
        tap(() => localStorage.removeItem('userData')),
        tap(() =>
          this.dialogService.openDialog(this.dialogEnumType.Success, {
            message: 'You were succesfully logout.',
          })
        )
      ),
    { dispatch: false }
  );

  authSignIn$ = createEffect(
    (): Observable<any> =>
      this.actions$.pipe(
        ofType(AuthActions.loginStart),
        switchMap((action) =>
          this.authService.singIn(action.email, action.password).pipe(
            tap((respData) => {
              this.dialogService.openDialog(this.dialogEnumType.Success, {
                message: `login successfull welcome ${respData.displayName}`,
              });
            }),
            map((resData) => this.handleAuthentication(resData)),
            tap(() => this.router.navigate(['/', 'dashboard'])),
            catchError(({ err, modalRef }) => {
              (modalRef as MatDialogRef<any, any>).afterClosed().subscribe(() => {
              })
              return of(AuthActions.clearError())
            })
          )
        )
      )
  );

  authRedirect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.authenticateSuccess)
      ),
    { dispatch: false }
  );

  authRedirectLogout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.logout),
        tap(() => {
          this.router.navigate(['/', 'auth']);
          this.authService.clearLogoutTimer();
        })
      ),
    { dispatch: false }
  );

  private handleError(errorResponse: HttpErrorResponse): any {
    return of(AuthActions.authenticateFail({ errorMessage: errorResponse.error.message }));
  }
  private handleAuthentication(responseData: LoginResponseDto): any {
    localStorage.setItem('userData', JSON.stringify(responseData));
    return AuthActions.authenticateSuccess(responseData);
  }
}
