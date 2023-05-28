import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { ButtonComponent } from './components/button/button.component';
import { TechSkillComponent } from './components/tech-skill/tech-skill.component';
import { CategoryTechSkillComponent } from './components/category-tech-skill/category-tech-skill.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    TechSkillComponent,
    CategoryTechSkillComponent
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
      CategoryTechSkillComponent
    ],
})
export class SharedModule {}
