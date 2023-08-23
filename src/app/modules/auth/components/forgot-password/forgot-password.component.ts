import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogType } from '@core/models/dialog.enum';
import { AuthService } from '@core/services/auth/auth.service';
import { DialogService } from '@core/services/dialog.service';
import { CustomValidators } from 'src/app/validators';

@Component({
  selector: 'portfolio-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  isLoading = false;
  private fb = inject(FormBuilder)
  private router = inject(Router)
  private route = inject(ActivatedRoute)
  private auth = inject(AuthService)
  private dialogService = inject(DialogService)
  private dialogEnumType = DialogType;

  token: string;
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

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      const token = params.get('token')
      if (!token) {
        this.router.navigate(['auth'])
        return;
      }
      this.token = token;
    })
  }

  onSubmit() {
    if (this.pageForm.invalid) {
      this.pageForm.markAllAsTouched();
      return;
    }
    this.isLoading = true;
    this.auth.changePassword(this.token, this.pageForm.get('password').value)
      .subscribe(() => {
        this.isLoading = false;
        this.dialogService.openDialog(this.dialogEnumType.Success, {
          message: 'Password changed successfully',
        })
        this.router.navigate(['/', 'auth'])
      },
        () => {
          this.isLoading = false;
          this.router.navigate(['/', 'auth'])
        })
  }
}
