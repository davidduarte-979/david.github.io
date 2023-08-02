import { Component, inject } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { Router } from '@angular/router';


@Component({
  selector: 'portfolio-recovery-password',
  templateUrl: './recovery-password.component.html',
  styleUrls: ['./recovery-password.component.scss']
})
export class RecoveryPasswordComponent {
  private router = inject(Router);
  input = new FormControl('', [Validators.required, Validators.email])

  submit() {
    if (this.input.invalid) {
      this.input.markAsTouched();
      return;
    }
    console.log('send recovery Email');
    this.router.navigate(['/', 'auth', 'recovery-password'])
  }

}
