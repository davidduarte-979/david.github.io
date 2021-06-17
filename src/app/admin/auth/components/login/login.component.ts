import { EventListenerFocusTrapInertStrategy } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { User } from 'src/app/core/models/user';
import { AuthService } from '../../../../core/services/auth/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user: User = {
    email: '',
    password: '',
  };
  constructor(private auth: AuthService) {}
  ngOnInit(): void {}
  onSubmit(event: Event): void {
    event.preventDefault();
    this.auth.signUp(this.user).subscribe((data) => console.log(data));
  }
}
