import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Token, User } from 'src/app/core/models/user';
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
  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {}
  onSubmit(event: Event): void {
    event.preventDefault();
    this.auth.signIn(this.user).subscribe(
      (data: Token) => {
        localStorage.setItem('token', data.token);
        this.router.navigate(['/', 'dashboard'], { relativeTo: this.route });
      },
      (err) => console.log(err)
    );
  }
}
