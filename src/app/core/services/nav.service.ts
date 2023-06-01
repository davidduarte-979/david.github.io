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
      link: 'dashboard'
    },
    {
      title: 'About',
      link: 'about'
    },
    {
      title: 'Projects',
      link: 'projects'
    },
    {
      title: 'Skills',
      link: 'skills'
    }, 
    {
      title: 'Contact',
      link: 'contact'
    },
  ]
  
  getNavLinks() {
    return this.navLinks;
  }
}
