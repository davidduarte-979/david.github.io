import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ServiceProjects } from '@core/services/projects/project.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss'],
})
export class EditProjectComponent implements OnInit {
  editProjectForm!: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private serviceProject: ServiceProjects
  ) {}

  ngOnInit(): void {
    this.editProjectForm = new FormGroup({});
  }
  onEditFormProject(): void {
    this.route.params.subscribe((data) => {
      this.serviceProject.updateProjects(data.id, {});
    });
  }
  onSubmit() {}
}
