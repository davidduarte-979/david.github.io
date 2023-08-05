import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ProjectsActions from './projects.actions';
import { switchMap, map, tap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Project } from '@core/models/project';
import { environment } from 'src/environments/environment';
import { AppState } from '@core/models/appState';
import { of, throwError } from 'rxjs';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ServiceProjects } from '@core/services/projects/project.service';
@Injectable({
  providedIn: 'root',
})
export class ProjectsEffects {
  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<AppState>,
    private router: Router,
    private serviceProjects: ServiceProjects
  ) { }

  fetchProjects$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ProjectsActions.fetchProjects),
        switchMap(() => this.serviceProjects.getAllProjects()
          .pipe(
            map(projects => ProjectsActions.fetchProjectsSuccess({ projects })),
            catchError(({ err, modalRef }) => {
              (modalRef as MatDialogRef<any, any>).afterClosed().subscribe(() => {
                ProjectsActions.clearError()
                this.router.navigate(['/'])
              })
              return of(ProjectsActions.clearError()
              );
            })
          )))
  );
}
