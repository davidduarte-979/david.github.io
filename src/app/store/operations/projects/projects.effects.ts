import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ProjectsActions from './projects.actions';
import { switchMap, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Project } from '@core/models/project';
import { environment } from 'src/environments/environment';
import * as fromApp from '../../app.reduce';
@Injectable({
  providedIn: 'root',
})
export class ProjectsEffects {
  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<fromApp.AppState>
  ) {}
  fetchProjects$ = createEffect(
    (): any =>
      this.actions$.pipe(
        ofType(ProjectsActions.fetchProjects),
        switchMap(() => {
          return this.http.get<any>(`${environment.API_URL_FIREBASE}.json`);
        }),
        map((responseData: any) => {
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
        map((projects: Project[]) => {
          return this.store.dispatch(
            ProjectsActions.fetchProjectsSuccess({ projects })
          );
        })
      ),
    { dispatch: false }
  );
}
