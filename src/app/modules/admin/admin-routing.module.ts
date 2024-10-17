import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { EditProjectComponent } from './components/edit-project/edit-project.component';
import { UsersComponent } from './components/users/users.component';
import { AddEditUserComponent } from './components/add-edit-user/add-edit-user.component';
import { roleGuard } from '@core/guards/role.guard';

const routes: Routes = [
  {
    path: '',
    component: SidebarComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'projects',
        component: ProjectsComponent,
        canActivate: [roleGuard]
      },
      {
        path: 'projects/:id',
        component: EditProjectComponent,
        canActivate: [roleGuard]
      },
      {
        path: 'add-project',
        component: AddProjectComponent,
        canActivate: [roleGuard]
      },
      {
        path: 'skills',
        component: SkillsComponent,
        canActivate: [roleGuard]
      },
      {
        path: 'users',
        component: UsersComponent,
        canActivate: [roleGuard]
      },
      {
        path: 'users/:id',
        component: AddEditUserComponent,
        canActivate: [roleGuard]
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
