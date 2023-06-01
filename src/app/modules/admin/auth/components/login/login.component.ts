import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import * as fromApp from '../../../../../store/app.reduce';
import * as AuthActions from '../../store/auth.actions';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  private router = inject(Router);
  signInForm!: FormGroup;
  signInSub!: Subscription;
  error!: string;
  isLoading = false;
  constructor(private store: Store<fromApp.AppState>) {
    this.buildForm();
  }
  ngOnInit(): void {
    this.signInSub = this.store.select('auth').subscribe((authResp) => {
      this.isLoading = authResp.loading;
      this.error = authResp.authError;
    });
  }
  onSubmit(): void {
    const email = this.signInForm.value.email;
    const password = this.signInForm.value.password;
    this.isLoading = true;
    this.store.dispatch(AuthActions.loginStart({ email, password }));
  }
  onClearError(): void {
    this.store.dispatch(AuthActions.clearError());
  }

  signUp() {
    this.router.navigate(['/', 'dashboard', 'auth', 'register'])
  }

  get email(): AbstractControl {
    return this.signInForm.get('email');
  }
  get password(): AbstractControl {
    return this.signInForm.get('password');
  }
  private buildForm(): void {
    this.signInForm = new FormGroup({
      email: new FormControl('david@duartechsolutions.com', [
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
