import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import * as AuthActions from '../../../../store/operations/auth/auth.actions';
import { Router } from '@angular/router';
import { AppState } from '@core/models/appState';
import { CustomValidators } from "../../../../validators";
import { CreateUserDto } from '@core/models/user';
@Component({
  selector: 'portfolio-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit, OnDestroy {
  private router = inject(Router);
  constructor(private store: Store<AppState>) { }

  signUpForm = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
  }, {
    validators: CustomValidators.matchPasswords
  });
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
    const newUser: CreateUserDto = {
      email: this.signUpForm.value.email,
      firstname: this.signUpForm.value.firstname,
      lastname: this.signUpForm.value.lastname,
      password: this.signUpForm.value.password,
    }
    this.store.dispatch(AuthActions.signUpStart(newUser));
  }
  onClearError(): void {
    this.store.dispatch(AuthActions.clearError());
  }

  signIn() {
    this.router.navigate(['/', 'auth'])
  }
  get firstname() {
    return this.signUpForm.get('firstname');
  }
  get lastname() {
    return this.signUpForm.get('lastname');
  }
  get email() {
    return this.signUpForm.get('email');
  }
  get password() {
    return this.signUpForm.get('password');
  }
  get confirmPassword() {
    return this.signUpForm.get('confirmPassword');
  }

  ngOnDestroy(): void {
    if (this.signUpSub) {
      this.signUpSub.unsubscribe();
    }
  }
}
