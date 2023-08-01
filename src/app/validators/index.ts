import { AbstractControl } from '@angular/forms';

export class CustomValidators {

  static matchPasswords(control: AbstractControl) {
    const password = control?.get('password')?.value;
    const confirmPassword = control?.get('confirmedPassword')?.value;
    if (password !== confirmPassword) {
      return { match_password: true };
    }
    return null;
  }
}
