import { Component, inject } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { AuthService } from '@core/services/auth/auth.service';


@Component({
  selector: 'portfolio-recovery-password',
  templateUrl: './recovery-password.component.html',
  styleUrls: ['./recovery-password.component.scss']
})
export class RecoveryPasswordComponent {
  private auth = inject(AuthService);
  input = new FormControl('', [Validators.required, Validators.email])
  isEmailSent = false;
  isLoading = false;

  submit() {
    if (this.input.invalid) {
      this.input.markAsTouched();
      return;
    }
    this.isLoading = true;
    this.auth.recoveryPassword(this.input.value).subscribe(() => {
      this.isEmailSent = true;
      this.isLoading = false;
    },
      () => {
        this.isLoading = false;
      })
  }

}
