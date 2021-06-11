import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './landing-page/components/about/about.component';
import { ContactComponent } from './landing-page/components/contact/contact.component';
import { ProjectsComponent } from './landing-page/components/projects/projects.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from './shared/shared.module';
import { HeroComponent } from './landing-page/components/hero/hero.component';
import { NewsletterComponent } from './landing-page/components/newsletter/newsletter.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LayoutComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    HeroComponent,
    NewsletterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
