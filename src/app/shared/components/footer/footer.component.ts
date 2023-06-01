import { Component, OnInit, inject } from '@angular/core';
import { NavLink } from '@core/models/nav-link';
import { NavService } from '@core/services/nav.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  private navServices = inject(NavService);
  currrentYear = new Date().getFullYear();
  navLinks: NavLink[]

  ngOnInit(): void {
    this.navLinks = this.navServices.getNavLinks();
  }
}
