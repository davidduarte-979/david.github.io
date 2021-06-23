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
  isLoaded = true;
  projectsSub!: Subscription;
  constructor(private serviceProjects: ServiceProjects) {}

  ngOnInit(): void {
    this.onGetProjects();
  }
  onGetProjects(): any {
    this.projectsSub = this.serviceProjects
      .getAllProjects()
      .subscribe((data) => {
        this.projects = data;
        this.isLoaded = false;
      });
  }
  ngOnDestroy(): void {
    this.projectsSub.unsubscribe();
  }
}
