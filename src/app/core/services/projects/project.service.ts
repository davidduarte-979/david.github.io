import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Project } from '../../models/project';
import { Observable, Subscription } from 'rxjs';
import { exhaustMap, map, switchMap, take } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { CurrentUser } from '@core/models/user';
@Injectable({ providedIn: 'root' })
export class ServiceProjects {
  constructor(
    private http: HttpClient,
    private auth: AuthService
     ) {}
  getAllProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${environment.API_URL_FIREBASE}.json`)
    .pipe(
      map(
        (responseData: any) => {
          const projectsArray = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              projectsArray.push(
                {
                  ...responseData[key],
                  id: key
                }
              );
            }
          }
          return projectsArray;
        })
      );
  }
  getProject(id: string): Observable<Project> {
    return this.http.get<Project>(`${environment.API_URL_FIREBASE}/${id}.json`);
  }
  createProjects(project: Project): any {
        return this.http.post<Project>(`${environment.API_URL_FIREBASE}.json`, project);
    // return this.auth.user
    // .pipe(
    //   take(1),
    //   exhaustMap((user: any) => {
    //     return this.http.post<Project>(`${environment.API_URL_FIREBASE}.json`, project, {
    //       params: new HttpParams().set('auth', user.token)
    //     });
    //   })
    // );
  }
  updateProjects(id: string, changes: Partial<Project>): Observable<object> {
    return this.http.put<Project>(`${environment.API_URL_FIREBASE}/${id}.json`, changes);
  }
  deleteProjects(id: string): Subscription {
    return this.http.delete<Project>(`${environment.API_URL_FIREBASE}/${id}.json`).subscribe();
  }
}
