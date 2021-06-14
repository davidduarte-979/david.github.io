import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/core/models/project';
import { ServiceProjects } from '../../../core/services/project.service';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects!: Project[];
  isLoaded = true;
  constructor(private serviceProjects: ServiceProjects) {}

  ngOnInit(): void {
    this.onGetProjects();
  }
  onGetProjects(): any {
    this.serviceProjects.getAllProducts().subscribe((data) => {
      console.log(data);
      this.projects = data;
      this.isLoaded = false;
    });
  }
}
