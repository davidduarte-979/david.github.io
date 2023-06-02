import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, pipe, Subscription } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Project } from 'src/app/core/models/project';
import { ServiceProjects } from '../../../../core/services/projects/project.service';
import * as fromApp from '../../../../store/app.reduce';
import * as ProjectAction from '../../../../store/operations/projects/projects.actions';
@Component({
  selector: 'portfolio-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit, OnDestroy {
  projects!: Project[];
  isLoading = false;
  projectsSub!: Subscription;
  error = null;
  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    this.onSubscribeData();
    this.onDispatchAction();
  }
  onSubscribeData(): void {
    this.projectsSub = this.store
      .select('projects')
      // .pipe(take(1))
      .subscribe((respStateDataProjects) => {
        this.projects = respStateDataProjects.projects;
        this.isLoading = respStateDataProjects.loading;
        this.error = respStateDataProjects.errorMessage;
      });
  }
  onDispatchAction(): void {
    this.store.dispatch(ProjectAction.fetchProjects());
  }
  onClearError(): void {
    this.store.dispatch(ProjectAction.clearError());
  }
  ngOnDestroy(): void {
    this.projectsSub.unsubscribe();
  }
}
