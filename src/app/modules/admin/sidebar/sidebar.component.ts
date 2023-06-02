import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from '@core/services/auth/auth.service';
import { User } from '@core/models/user';
import * as fromApp from '../../../store/app.reduce';
import * as AuthActions from '../../../store/operations/auth/auth.actions';
import { Store } from '@ngrx/store';
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
    private auth: AuthService,
    private store: Store<fromApp.AppState>
  ) {}
  ngOnInit(): void {
    this.subStore = this.store.select('auth').subscribe((authStateResponse) => {
      this.username = authStateResponse.user
        ? authStateResponse.user.email
        : '';
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
