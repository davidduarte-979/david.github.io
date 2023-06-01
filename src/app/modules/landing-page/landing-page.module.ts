import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { PageNotFoundComponent } from '@shared/components/page-not-found/page-not-found.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeroComponent } from './components/hero/hero.component';
import { LayoutComponent } from './components/layout/layout.component';
import { CardComponent } from './components/projects/card/card.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillBarComponent } from './components/skill-bar/skill-bar.component';
import { LandingPageComponent } from './landing-page.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    LandingPageComponent,
    LayoutComponent,
    HeroComponent,
    CardComponent,
    ProjectsComponent,
    SkillBarComponent,
    PageNotFoundComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    SharedModule
  ]
})
export class LandingPageModule { }
