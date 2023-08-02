import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RedirectToGuard } from '@core/guards/redirect-to.guard';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { RecoveryPasswordComponent } from './components/recovery-password/recovery-password.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [RedirectToGuard],
    children: [
      {
        path: '',
        redirectTo: '/auth',
        pathMatch: 'full',
      },
      {
        path: '',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'forgot-password',
        component: RecoveryPasswordComponent,
      },
      {
        path: 'recovery-password',
        component: ForgotPasswordComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule { }
