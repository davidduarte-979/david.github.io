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
  title = 'Projects';
  text = 'Summarizing hard work, concepts, technological stacks, frameworks, preprocessors, and databases. In this section, I present a compilation of my personal and professional projects. It represents the result of my hard work, diverse skill set, and innovative ideas, and demonstrates the use of various technologies, frameworks, preprocessors, and databases.';

  constructor(
    private store: Store<AppState>,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.onSubscribeData();
  }

  onSubscribeData(): void {
    this.projectsSub = this.http.get<Project[]>('./assets/data/Projects.json').subscribe((data) => {
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
