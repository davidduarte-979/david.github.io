import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Project } from 'src/app/core/models/project';
import * as ProjectAction from '../../../../store/operations/projects/projects.actions';
import { AppState } from '@core/models/appState';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'portfolio-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit, OnDestroy {
  projects: Project[] = [];
  isLoading = false;
  projectsSub!: Subscription;
  error = null;

  constructor(
    private store: Store<AppState>,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.onSubscribeData();
    // this.onDispatchAction();
  }

  onSubscribeData(): void {
    // this.projectsSub = this.store
    //   .select('projects')
    //   .subscribe((respStateDataProjects) => {
    //     this.projects = respStateDataProjects.projects;
    //     this.isLoading = respStateDataProjects.loading;
    //     this.error = respStateDataProjects.errorMessage;
    //   });
    this.http.get<Project[]>('./assets/data/Projects.json').subscribe((data) => {
      console.log(data);
      this.projects = data;
    })
  }

  onDispatchAction(): void {
    this.store.dispatch(ProjectAction.fetchProjects());
  }

  ngOnDestroy(): void {
    this.projectsSub.unsubscribe();
  }
}
