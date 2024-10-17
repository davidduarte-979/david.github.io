import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { AppState } from '@core/models/appState';
import { UserRole } from '@core/models/user';

import * as AuthActions from '../../../store/operations/auth/auth.actions';
import { AuthState } from 'src/app/store/operations/auth/auth.reducer';

@Component({
  selector: 'portfolio-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  auth$!: Observable<AuthState>;
  userRole = UserRole;
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.auth$ = this.store.select('auth');
  }

  onLogOut(): void {
    this.store.dispatch(AuthActions.logout());
  }
}
