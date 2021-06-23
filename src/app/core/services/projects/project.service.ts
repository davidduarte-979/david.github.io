import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Project } from '../../models/project';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
@Injectable({ providedIn: 'root' })
export class ServiceProjects {
  constructor(private http: HttpClient) {}
  getAllProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(environment.API_URL);
  }
  getProjects(id: string): Observable<Project> {
    return this.http.get<Project>(`${environment.API_URL}/${id}`);
  }
  createProjects(project: Project): Observable<object> {
    return this.http.post<Project>(environment.API_URL, project);
  }
  updateProjects(id: string, changes: Partial<Project>): Observable<object> {
    return this.http.put<Project>(`${environment.API_URL}/${id}`, changes);
  }
  deleteProjects(id: string): Observable<object> {
    return this.http.delete<Project>(`${environment.API_URL}/${id}`);
  }
}
