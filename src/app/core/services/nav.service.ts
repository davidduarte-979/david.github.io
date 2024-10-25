import { Injectable } from '@angular/core';
import { NavLink } from '@core/models/nav-link';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  private navLinks: NavLink[] = [
    {
      title: 'Home',
      link: '/'
    },
    {
      title: 'Dashboard',
      link: '/dashboard'
    },
    {
      title: 'About',
      link: '/home/about'
    },
    {
      title: 'Projects',
      link: '/home/projects'
    },
    {
      title: 'Skills',
      link: '/home/skills'
    },
    {
      title: 'Contact',
      link: '/home/contact'
    },
  ]

  getNavLinks() {
    return this.navLinks;
  }
}
