import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/core/models/project';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() project!: Project;
  image = 'https://media-porfolio.s3.us-east-2.amazonaws.com/images/hazpan.gif';
  constructor() {}

  ngOnInit(): void {}
}
