import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@core/guards/auth.guard';
import { RedirectToGuard } from '@core/guards/redirect-to.guard';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [RedirectToGuard],
    children: [
      {
        path: '',
        redirectTo: '/dashboard/auth',
        pathMatch: 'full',
      },
      {
        path: '',
        component: LoginComponent,
      },
      {
        path: 'register',
        canActivate: [AuthGuard],
        component: RegisterComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
