import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@shared/material/material.module';

@Component({
  selector: 'portfolio-button',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Output() clickEvent = new EventEmitter();
  @Input() color?: 'primary' | 'accent' | 'warn';
  @Input() type: 'submit' | 'button' | 'reset';
  @Input() class?: string;

  triggerEvent(): void{
    this.clickEvent.emit(new Event('click'))
  }
}
