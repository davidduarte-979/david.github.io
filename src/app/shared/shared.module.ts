import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  imports: [CommonModule, RouterModule, MaterialModule, ButtonComponent],
  exports: [NavbarComponent, FooterComponent, MaterialModule, ButtonComponent],
})
export class SharedModule {}
