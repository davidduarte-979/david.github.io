import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AuthActions from './store/operations/auth/auth.actions';
import { AppState } from '@core/models/appState';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private store: Store<AppState>
  ) { }
  ngOnInit(): void {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData) {
      this.store.dispatch(AuthActions.autoLogin());
    }
  }
}
