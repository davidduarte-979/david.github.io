import { Component, Input } from '@angular/core';

@Component({
  selector: 'portfolio-glow-img',
  templateUrl: './glow-img.component.html',
  styleUrls: ['./glow-img.component.scss']
})
export class GlowImgComponent {
  @Input() imgUrl: string;
}
