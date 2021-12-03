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
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SkillBarComponent } from './landing-page/components/skill-bar/skill-bar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderInterceptor } from '@core/services/auth/auth-interceptor.service';
import { ProjectsEffects } from './landing-page/components/projects/store/projects.effects';
import * as fromApp from './store/app.reduce';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { AuthEffects } from './admin/auth/store/auth.effects';
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
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([AuthEffects, ProjectsEffects]),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production,
    }),
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
