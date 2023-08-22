import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { AuthService } from '@core/services/auth/auth.service';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, first, map, switchMap } from 'rxjs/operators';

export class CustomValidators {

  static matchPasswords(control: AbstractControl) {
    const password = control?.get('password')?.value;
    const confirmPassword = control?.get('confirmPassword')?.value;
    if (password.length > 0 && password !== confirmPassword) {
      return { match_password: true };
    }
    return null;
  }

  static isEmailAvailable(authService: AuthService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors> => control.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      first(),
      switchMap((value: string) => authService.isEmailAvailable(value)
        .pipe(
          map((rta: { isAvailable: boolean }) => rta.isAvailable ? null : { 'emailNotAvailable': true })
        ),
      )
    )
  }
}
