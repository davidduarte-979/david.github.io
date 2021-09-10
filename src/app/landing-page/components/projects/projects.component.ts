import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Project } from 'src/app/core/models/project';
import { ServiceProjects } from '../../../core/services/projects/project.service';
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
    private store: Store<{projects: { projects: Project[] }}>
    ) {}

  ngOnInit(): void {
    // this.projects$ = this.store.select('projects');
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
