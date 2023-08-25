import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@core/models/user';
import { environment } from 'src/environments/environment';
import { switchMap } from 'rxjs/operators';
import { checkBearerToken } from '@core/interceptors/token-interceptor';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>(`${environment.SYSTEM_API}/${environment.API_VERSION}/users`, { context: checkBearerToken() })
  }

  deleteUser(id: User['id']) {
    return this.http.delete<User[]>(`${environment.SYSTEM_API}/${environment.API_VERSION}/users/${id}`, { context: checkBearerToken() })
      .pipe(switchMap(() => this.getUsers()))
  }
}
