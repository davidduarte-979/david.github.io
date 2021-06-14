import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './landing-page/components/about/about.component';
import { ContactComponent } from './landing-page/components/contact/contact.component';
import { ProjectsComponent } from './landing-page/components/projects/projects.component';
import { SkillBarComponent } from './landing-page/components/skill-bar/skill-bar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: LandingPageComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'projects',
        component: ProjectsComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: 'skills',
        component: SkillBarComponent,
      },
    ],
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
