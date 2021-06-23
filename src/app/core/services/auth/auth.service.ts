import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Token, User } from '../../models/user';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  signUp(user: User): Observable<object> {
    return this.http.post<User>(`${environment.API_AUTH}/signup`, user);
  }
  signIn(user: User): Observable<Token> {
    return this.http.post<Token>(`${environment.API_AUTH}/signin`, user);
  }
  loggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/', 'dashboard', 'auth']);
  }
  getUser(): Observable<User> {
    const id = '60d300e9c5cc08064270822d';
    return this.http.get<User>(`${environment.API_AUTH}/users/${id}`);
  }
}
