import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/services/auth/auth.service';
import { Store } from '@ngrx/store';
import * as fromApp from './store/app.reduce';
import * as AuthActions from './admin/auth/store/auth.actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private store: Store<fromApp.AppState>
  ) {}
  ngOnInit(): void {
    this.store.dispatch(AuthActions.autoLogin());
  }
}
