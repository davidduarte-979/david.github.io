import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Token } from 'src/app/core/models/user';
import { AuthService } from '@core/services/auth/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  signInForm!: FormGroup;
  signInSub!: Subscription;
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
    this.signInSub = this.auth.signIn(this.signInForm.value).subscribe(
      (data: Token) => {
        localStorage.setItem('token', data.token);
        this.router.navigate(['/', 'dashboard'], { relativeTo: this.route });
      },
      (err) => console.log(err)
    );
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
