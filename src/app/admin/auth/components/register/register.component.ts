import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/core/models/user';
import { AuthService } from '../../../../core/services/auth/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit, OnDestroy {
  constructor(private auth: AuthService, private router: Router) {}
  signUpForm!: FormGroup;
  signUpSub!: Subscription;
  isLoading = false;
  error!: string;
  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }
  onSubmit(): void {
    this.isLoading = true;
    const email = this.signUpForm.value.email;
    const password = this.signUpForm.value.password;
    this.signUpSub = this.auth
      .signUp(email, password)
      .subscribe(
        (data) => {
        console.log(data);
        this.isLoading = false;
        this.router.navigate(['/', 'dashboard']);
      },
      ((errorMessage) => {
        console.log(errorMessage);
        this.isLoading = false;
        this.error = errorMessage;
      })
      );
  }
  get email(): any {
    return this.signUpForm.get('email');
  }
  get password(): any {
    return this.signUpForm.get('password');
  }
  ngOnDestroy(): void {
    if (this.signUpSub) {
      this.signUpSub.unsubscribe();
    }
  }
}
