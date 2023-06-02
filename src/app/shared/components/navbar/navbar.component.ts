import { Component, OnInit, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NavLink } from '@core/models/nav-link';
import { NavService } from '@core/services/nav.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'portfolio-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isOpen = false;
  private router = inject(Router);
  private navService = inject(NavService);
  navLinks: NavLink[];

  ngOnInit(): void {
    this.navLinks = this.navService.getNavLinks();
    this.router.events
    .pipe(
      filter((event) => event instanceof NavigationEnd)
    )
    .subscribe(() => {
      this.isOpen = false
    })
  }

  toggleMenu(){
    this.isOpen = !this.isOpen;
  }

}
