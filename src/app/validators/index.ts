import { AbstractControl } from '@angular/forms';

export class CustomValidators {

  static matchPasswords(control: AbstractControl) {
    const password = control?.get('password')?.value;
    const confirmPassword = control?.get('confirmPassword')?.value;
    if (password.length > 0 && password !== confirmPassword) {
      return { match_password: true };
    }
    return null;
  }
}
