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
  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }
  onSubmit(): void {
    this.signUpSub = this.auth
      .signUp(this.signUpForm.value)
      .subscribe((data) => console.log(data));
    this.router.navigate(['dashboard']);
  }
  get firstName(): any {
    return this.signUpForm.get('firstName');
  }
  get email(): any {
    return this.signUpForm.get('email');
  }
  get password(): any {
    return this.signUpForm.get('password');
  }
  get lastName(): any {
    return this.signUpForm.get('lastName');
  }
  ngOnDestroy(): void {
    if (this.signUpSub) {
      this.signUpSub.unsubscribe();
    }
  }
}
