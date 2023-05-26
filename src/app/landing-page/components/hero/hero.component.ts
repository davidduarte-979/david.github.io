import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  private router = inject(Router);
  constructor() { }

  ngOnInit(): void {
  }

  getStarted() {
    this.router.navigate(['/about'])
  }

}
