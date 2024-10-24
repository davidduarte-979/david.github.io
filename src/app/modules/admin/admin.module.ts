import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SkillsComponent } from './components/skills/skills.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { EditProjectComponent } from './components/edit-project/edit-project.component';
import { UsersComponent } from './components/users/users.component';
import { AddEditUserComponent } from './components/add-edit-user/add-edit-user.component';
import { SnakeGameComponent } from './components/snake-game/snake-game.component';

@NgModule({
  declarations: [
    SidebarComponent,
    ProjectsComponent,
    SkillsComponent,
    DashboardComponent,
    AddProjectComponent,
    EditProjectComponent,
    UsersComponent,
    AddEditUserComponent,
    SnakeGameComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class AdminModule { }
