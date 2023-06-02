import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '@core/models/project';
import { ServiceProjects } from '@core/services/projects/project.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'portfolio-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss'],
})
export class EditProjectComponent implements OnInit {
  editProjectForm!: FormGroup;
  project$!: Observable<Project>;
  id!: string;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private serviceProject: ServiceProjects,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.onGetProject();
    this.formBuild();
  }
  onGetProject(): void {
    this.route.params.subscribe((data) => {
      this.id = data.id;
      this.serviceProject.getProject(this.id).subscribe((project: any) => {
        this.editProjectForm.patchValue({
          projectName: project.projectName,
          title: project.title,
          description: project.description,
          technologies: project.technologies,
          imageUrl: project.imageUrl,
          projectUrl: project.projectUrl,
        });
      });
    });
  }

  get projectName(): AbstractControl | null {
    return this.editProjectForm.get('projectName');
  }

  private formBuild(): void {
    this.editProjectForm = this.fb.group({
      projectName: ['', [Validators.required]],
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      technologies: ['', [Validators.required]],
      imageUrl: ['', [Validators.required]],
      projectUrl: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    this.serviceProject
      .updateProjects(this.id, this.editProjectForm.value)
      .subscribe(() => {
        this.router.navigate(['/', 'dashboard', 'projects']);
      });
  }
}
