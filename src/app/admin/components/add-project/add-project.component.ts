import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Project } from '@core/models/project';
import { ServiceProjects } from '@core/services/projects/project.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss'],
})
export class AddProjectComponent implements OnInit {
  constructor(
    private serviceProjects: ServiceProjects,
    private router: Router
  ) {}
  addProjectForm!: FormGroup;
  ngOnInit(): void {
    this.addProjectForm = new FormGroup({
      projectName: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      technologies: new FormControl('', [Validators.required]),
      imageUrl: new FormControl('', [Validators.required]),
      projectUrl: new FormControl('', [Validators.required]),
    });
  }
  onSubmit(): void {
    this.serviceProjects
      .createProjects(this.addProjectForm.value as Project)
      .subscribe((data) => {
        console.log(data);
        this.router.navigate(['/', 'dashboard', 'projects']);
      });
  }
}
