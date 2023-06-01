import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { TechSkillComponent } from './components/tech-skill/tech-skill.component';
import { CategoryTechSkillComponent } from './components/category-tech-skill/category-tech-skill.component';
import { BannerComponent } from './components/banner/banner.component';
import { WrapperContainerComponent } from './components/wrapper-container/wrapper-container.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    TechSkillComponent,
    CategoryTechSkillComponent,
    BannerComponent,
    WrapperContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ButtonComponent
  ],
  exports: [
      NavbarComponent,
      FooterComponent,
      MaterialModule,
      ButtonComponent,
      TechSkillComponent,
      CategoryTechSkillComponent,
      BannerComponent,
      WrapperContainerComponent
    ],
})
export class SharedModule {}
