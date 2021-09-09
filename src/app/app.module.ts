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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SkillBarComponent } from './landing-page/components/skill-bar/skill-bar.component';
import { AuthGuard } from './core/guards/auth.guard';
import { TokenInterceptorService } from './core/services/token-interceptor/token-interceptor.service';
import { RedirectToGuard } from './core/guards/redirect-to.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderInterceptor } from '@core/services/auth/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LayoutComponent,
    HeroComponent,
    CardComponent,
    ProjectsComponent,
    SkillBarComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
