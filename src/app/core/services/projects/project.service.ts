import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Project } from '../../models/project';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
@Injectable({ providedIn: 'root' })
export class ServiceProjects {
  projectsArray: Project[] = [];
  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }
  getAllProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${environment.API_URL_FIREBASE}.json`)
      .pipe(
        map(
          (responseData: any) => {
            for (const key in responseData) {
              if (responseData.hasOwnProperty(key)) {
                this.projectsArray.push(
                  {
                    ...responseData[key],
                    id: key
                  }
                );
              }
            }
            return this.projectsArray;
          })
      );
  }
  getProject(id: string): Observable<Project> {
    return this.http.get<Project>(`${environment.API_URL_FIREBASE}/${id}.json`);
  }
  createProjects(project: Project): any {
    return this.http.post<Project>(`${environment.API_URL_FIREBASE}.json`, project);
  }
  updateProjects(id: string, changes: Partial<Project>): Observable<object> {
    return this.http.put<Project>(`${environment.API_URL_FIREBASE}/${id}.json`, changes);
  }
  deleteProjects(id: string): Subscription {
    return this.http.delete<Project>(`${environment.API_URL_FIREBASE}/${id}.json`).subscribe();
  }
}
