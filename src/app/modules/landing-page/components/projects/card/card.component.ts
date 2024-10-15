import { Component, Input } from '@angular/core';
import { Project } from 'src/app/core/models/project';

@Component({
  selector: 'portfolio-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() project!: Project;
  image = 'https://media-porfolio.s3.us-east-2.amazonaws.com/images/hazpan.gif';
}
