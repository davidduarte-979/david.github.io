import { Component } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";


@Component({
  selector: 'portfolio-recovery-password',
  templateUrl: './recovery-password.component.html',
  styleUrls: ['./recovery-password.component.scss']
})
export class RecoveryPasswordComponent {
  input = new FormControl('', [Validators.required, Validators.email])

  submit() {
    if (this.input.invalid) {
      this.input.markAsTouched();
      return;
    }
    console.log('send recovery Email');
  }

}
