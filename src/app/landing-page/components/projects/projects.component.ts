import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Project } from 'src/app/core/models/project';
import { ServiceProjects } from '../../../core/services/projects/project.service';
import * as fromApp from '../../../store/app.reduce';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit, OnDestroy {
  projects$!: Observable<{projects: Project[]}>;
  projects!: Project[];
  isLoading = false;
  projectsSub!: Subscription;
  constructor(
    private serviceProjects: ServiceProjects,
    private store: Store<fromApp.AppState>
    ) {}

  ngOnInit(): void {
    // this.isLoading = true;
    // this.projectsSub = this.store.select('projects')
    // .pipe(
    //   map((resDataState) => resDataState.projects)
    // )
    // .subscribe((projects) => {
    //   console.log(projects);
    //   this.isLoading = false;
    //   this.projects = projects;
    // });
    // console.log(this.projects$);
    this.onGetProjects();
  }
  onGetProjects(): any {
    this.isLoading = true;
    this.projectsSub = this.serviceProjects
      .getAllProjects()
      .subscribe((data) => {
        this.isLoading = false;
        this.projects = data;
      });
  }
  ngOnDestroy(): void {
    this.projectsSub.unsubscribe();
  }
}
