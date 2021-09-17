import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Action, Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ProjectsActions from './projects.actions';
import { switchMap, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
``;
import { Project } from '@core/models/project';
import { environment } from 'src/environments/environment';
import * as fromApp from '../../../../store/app.reduce';
@Injectable({
  providedIn: 'root',
})
export class ProjectsEffects {
  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<fromApp.AppState>
  ) {}
  fetchProjects$ = createEffect((): Observable<any> => {
    return this.actions$.pipe(
      ofType(ProjectsActions.FETCH_PROJECTS),
      switchMap(() => {
        return this.http
          .get<Project[]>(`${environment.API_URL_FIREBASE}.json`)
          .pipe(
            map((responseData: any) => {
              console.log(responseData);
              const projectsArray = [];
              for (const key in responseData) {
                if (responseData.hasOwnProperty(key)) {
                  projectsArray.push({
                    ...responseData[key],
                    id: key,
                  });
                }
              }
              return projectsArray;
            }),
            tap((projects) => {
              console.log(projects);
              this.store.dispatch(new ProjectsActions.SetProjects(projects));
              return new ProjectsActions.SetProjects(projects);
            })
          );
      })
    );
  });
}
