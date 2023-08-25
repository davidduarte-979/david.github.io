import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@core/models/user';
import { environment } from 'src/environments/environment';
import { TokenService } from './token.service';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  token: string;

  constructor(private http: HttpClient, private tokenService: TokenService) {
    this.token = this.tokenService.getToken();
  }

  getUsers() {
    return this.http.get<User[]>(`${environment.SYSTEM_API}/${environment.API_VERSION}/users`, { headers: { Authorization: `Bearer ${this.token}` } })
  }

  deleteUser(id: User['id']) {
    return this.http.delete<User[]>(`${environment.SYSTEM_API}/${environment.API_VERSION}/users/${id}`, { headers: { Authorization: `Bearer ${this.token}` } })
      .pipe(switchMap(() => this.getUsers()))
  }
}
