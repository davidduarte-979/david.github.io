import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Project } from 'src/app/core/models/project';
import { ServiceProjects } from '../../../core/services/projects/project.service';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit, OnDestroy {
  projects!: Project[];
  isLoading = false;
  projectsSub!: Subscription;
  constructor(private serviceProjects: ServiceProjects) {}

  ngOnInit(): void {
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
