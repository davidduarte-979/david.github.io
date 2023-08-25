import { Injectable } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSourceService<T> extends DataSource<T> {

  data = new BehaviorSubject<T[]>([]);
  originalData: T[] = [];

  connect(): Observable<T[]> {
    return this.data;
  }

  init(data: T[]) {
    this.originalData = data;
    this.data.next(data);
  }

  disconnect() { }
}
