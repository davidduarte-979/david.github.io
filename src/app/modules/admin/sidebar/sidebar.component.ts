import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { User } from '@core/models/user';
import * as AuthActions from '../../../store/operations/auth/auth.actions';
import { Store } from '@ngrx/store';
import { AppState } from '@core/models/appState';
@Component({
  selector: 'portfolio-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, OnDestroy {
  username = '';
  user$!: Observable<User>;
  subStore: Subscription;
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
    this.subStore = this.store.select('auth').subscribe((authStateResponse) => {
      this.username = authStateResponse.user.displayName || authStateResponse.user.email
    });
  }
  onLogOut(): void {
    this.store.dispatch(AuthActions.logout());
  }
  ngOnDestroy(): void {
    if (this.subStore) {
      this.subStore.unsubscribe();
    }
  }
}
