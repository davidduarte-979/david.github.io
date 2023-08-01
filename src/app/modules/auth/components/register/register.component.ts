import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import * as AuthActions from '../../../../store/operations/auth/auth.actions';
import { Router } from '@angular/router';
import { AppState } from '@core/models/appState';
import { CustomValidators } from "../../../../validators";
@Component({
  selector: 'portfolio-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit, OnDestroy {
  private router = inject(Router);
  constructor(private store: Store<AppState>) {
    this.buildForm();
  }
  signUpForm!: FormGroup;
  signUpSub!: Subscription;
  isLoading = false;
  error!: string;
  ngOnInit(): void {
    this.signUpSub = this.store.select('auth').subscribe((authResp) => {
      this.isLoading = authResp.loading;
      this.error = authResp.error;
    });
  }
  onSubmit(): void {
    if (this.signUpForm.invalid) {
      this.signUpForm.markAllAsTouched();
      return;
    }
    const email = this.signUpForm.value.email;
    const password = this.signUpForm.value.password;
    this.store.dispatch(AuthActions.signUpStart({ email, password }));
  }
  onClearError(): void {
    this.store.dispatch(AuthActions.clearError());
  }

  signIn() {
    this.router.navigate(['/', 'auth'])
  }
  get email() {
    return this.signUpForm.get('email');
  }
  get password() {
    return this.signUpForm.get('password');
  }
  get confirmedPassword() {
    return this.signUpForm.get('confirmedPassword');
  }

  private buildForm(): void {
    this.signUpForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      confirmedPassword: new FormControl('', [Validators.required]),
    }, {
      validators: CustomValidators.matchPasswords
    });
  }
  ngOnDestroy(): void {
    if (this.signUpSub) {
      this.signUpSub.unsubscribe();
    }
  }
}
