import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/core/models/user';
import { AuthService } from '../../../../core/services/auth/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  user: User = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };
  ngOnInit(): void {}
  onSubmit(event: Event): void {
    event.preventDefault();
    this.auth.signUp(this.user).subscribe((data) => console.log(data));
    this.router.navigate(['dashboard']);
  }
}
