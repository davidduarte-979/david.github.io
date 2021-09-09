import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
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
    private router: Router,
    private fb: FormBuilder
  ) {
    this.formBuilder();
  }
  addProjectForm!: FormGroup;
  ngOnInit(): void {}
  private formBuilder(): void {
    this.addProjectForm = this.fb.group({
      projectName: ['', [Validators.required]],
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      technologies: ['', [Validators.required]],
      imageUrl: ['', [Validators.required]],
      projectUrl: ['', [Validators.required]],
    });
  }
  onSubmit(): void {
    this.serviceProjects
      .createProjects(this.addProjectForm.value as Project)
      .subscribe((data: any) => {
        console.log(data);
        this.router.navigate(['/', 'dashboard', 'projects']);
      });
  }
}
