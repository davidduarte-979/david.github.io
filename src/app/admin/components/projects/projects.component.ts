import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Project } from '@core/models/project';
import { ServiceProjects } from '@core/services/projects/project.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = [
    'id',
    'title',
    'projectUrl',
    'imageUrl',
    'Actions',
  ];
  dataSource!: MatTableDataSource<Project>;
  dataSourceSub!: Subscription;
  constructor(
    private projectService: ServiceProjects,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.dataSourceSub = this.projectService
      .getAllProjects()
      .subscribe((data) => {
        this.dataSource = new MatTableDataSource(data);
      });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  onDeleteProject(id: string): void {
    this.projectService.deleteProjects(id).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/', 'dashboard', 'projects']);
    });
  }
  ngOnDestroy(): void {
    this.dataSourceSub.unsubscribe();
  }
}
