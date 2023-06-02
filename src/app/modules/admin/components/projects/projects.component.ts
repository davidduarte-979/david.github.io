import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Project } from '@core/models/project';
import { ServiceProjects } from '@core/services/projects/project.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'portfolio-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit, OnDestroy {
  isLoading = false;
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
    this.onGetData();
  }
  onGetData(): void {
    this.isLoading = true;
    this.dataSourceSub = this.projectService
      .getAllProjects()
      .subscribe((data: any) => {
        this.isLoading = false;
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
    this.projectService.deleteProjects(id);
    this.onGetData();
  }
  ngOnDestroy(): void {
    this.dataSourceSub.unsubscribe();
  }
}
