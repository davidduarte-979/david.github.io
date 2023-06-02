import { Action, createReducer, on } from '@ngrx/store';
import { CurrentUser } from '@core/models/user';
import * as AuthActions from './auth.actions';

export interface State {
  user: CurrentUser;
  error: string;
  loading: boolean;
}

const initialState: State = {
  user: null,
  error: null,
  loading: false,
};

const _authReducer = createReducer<State>(
  initialState,

  on(
    AuthActions.loginStart,
    AuthActions.signUpStart,
    (state, action) => ({
    ...state,
    user: null,
    error: null,
    loading: true,
  })),

  on(AuthActions.logout, (state, action) => ({
    ...state,
    user: null,
    uthError: null,
    loading: false,
  })),

  on(AuthActions.authenticateSuccess, (state, action) => ({
    ...state,
    user: new CurrentUser(
      action.email,
      action.userId,
      action.token,
      action.expirationDate
    ),
    error: null,
    loading: false,
  })),

  on(AuthActions.authenticateFail, (state, action) => ({
    ...state,
    error: action.errorMessage,
    loading: false,
  })),

  on(AuthActions.clearError, (state, action) => ({
    ...state,
    error: null,
  }))
);

export const authReducer = (state: State, action: Action): State => _authReducer(state, action);
