import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/validators';

@Component({
  selector: 'portfolio-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  isLoading = false;
  private fb = inject(FormBuilder)
  pageForm = this.fb.group({
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('')
  }, {
    validators: [CustomValidators.matchPasswords]
  })
  get password() {
    return this.pageForm.get('password');
  }
  get confirmPassword() {
    return this.pageForm.get('confirmPassword');
  }

  onSubmit() {
    if (this.pageForm.invalid) {
      this.pageForm.markAllAsTouched();
      return;
    }
    console.log('password Changed');
  }
}
