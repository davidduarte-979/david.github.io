import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '@core/services/auth/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  signInForm!: FormGroup;
  signInSub!: Subscription;
  error!: string;
  isLoading = false;
  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.signInForm = new FormGroup({
      email: new FormControl('david@duartechsolutions.com', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl('', [Validators.required]),
    });
  }
  onSubmit(): void {
    const email = this.signInForm.value.email;
    const password = this.signInForm.value.password;
    this.isLoading = true;
    this.signInSub = this.auth.signIn(email, password)
    .subscribe(
      () => {
        this.isLoading = false;
        this.router.navigate(['/', 'dashboard']);
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
        this.error = error;
      });
  }
  get email(): any {
    return this.signInForm.get('email');
  }
  get password(): any {
    return this.signInForm.get('password');
  }
  ngOnDestroy(): void {
    if (this.signInSub) {
      this.signInSub.unsubscribe();
    }
  }
}
