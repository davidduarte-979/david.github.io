import { Action, createReducer, on } from '@ngrx/store';
import { CurrentUser } from '@core/models/user';
import * as AuthActions from './auth.actions';

export interface State {
  user: CurrentUser;
  authError: string;
  loading: boolean;
}

const initialState: State = {
  user: null,
  authError: null,
  loading: false,
};

const _authReducer = createReducer(
  initialState,

  on(AuthActions.loginStart, AuthActions.signUpStart, (state, action) => ({
    ...state,
    user: null,
    authError: null,
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
    authError: null,
    loading: false,
  })),

  on(AuthActions.authenticateFail, (state, action) => ({
    ...state,
    authError: action.errorMessage,
    loading: false,
  })),

  on(AuthActions.clearError, (state, action) => ({
    ...state,
    authError: null,
  }))
);

export function authReducer(state: State, action: Action): State {
  return _authReducer(state, action);
}
