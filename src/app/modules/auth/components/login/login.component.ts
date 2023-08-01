import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import * as AuthActions from '../../../../store/operations/auth/auth.actions';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { DialogType } from '@core/models/dialog.enum';
import { AppState } from '@core/models/appState';
@Component({
  selector: 'portfolio-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  private router = inject(Router);
  dialogTypeEnum = DialogType;
  signInForm!: FormGroup;
  signInSub!: Subscription;
  isLoading = false;
  constructor(private store: Store<AppState>) {
    this.buildForm();
  }
  ngOnInit(): void {
    this.signInSub = this.store.select('auth').subscribe((authResp) => {
      this.isLoading = authResp.loading;
    });
  }
  onSubmit(): void {
    if (this.signInForm.invalid) {
      this.signInForm.markAllAsTouched();
      return;
    }
    const email = this.signInForm.value.email;
    const password = this.signInForm.value.password;
    this.isLoading = true;
    this.store.dispatch(AuthActions.loginStart({ email, password }));
  }

  signUp() {
    this.router.navigate(['/', 'auth', 'register'])
  }

  get email(): AbstractControl {
    return this.signInForm.get('email');
  }
  get password(): AbstractControl {
    return this.signInForm.get('password');
  }
  private buildForm(): void {
    this.signInForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl('', [Validators.required]),
    });
  }
  ngOnDestroy(): void {
    if (this.signInSub) {
      this.signInSub.unsubscribe();
    }
  }
}
