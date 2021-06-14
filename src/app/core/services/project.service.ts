import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Project } from '../models/project';
import { Observable } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class ServiceProjects {
  constructor(private http: HttpClient) {}
  getAllProducts(): Observable<Project[]> {
    return this.http.get<Project[]>(environment.API_URL);
  }
  getProduct(id: string): Observable<Project> {
    return this.http.get<Project>(`${environment.API_URL}/${id}`);
  }
  createProduct(product: Project): Observable<object> {
    return this.http.post(environment.API_URL, product);
  }
  updateProduct(id: string, changes: Partial<Project>): Observable<object> {
    return this.http.put(`${environment.API_URL}/${id}`, changes);
  }
  deleteProduct(id: string): Observable<object> {
    return this.http.delete(`${environment.API_URL}/${id}`);
  }
}
