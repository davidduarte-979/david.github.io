import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './landing-page/components/projects/projects.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from './shared/shared.module';
import { HeroComponent } from './landing-page/components/hero/hero.component';
import { CoreModule } from './core/core.module';
import { CardComponent } from './landing-page/components/projects/card/card.component';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SkillBarComponent } from './landing-page/components/skill-bar/skill-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LayoutComponent,
    HeroComponent,
    CardComponent,
    ProjectsComponent,
    SkillBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
