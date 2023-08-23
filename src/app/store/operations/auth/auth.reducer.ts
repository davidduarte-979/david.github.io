import { Action, createReducer, on } from '@ngrx/store';
import { LoginResponseDto } from '@core/models/user';
import * as AuthActions from './auth.actions';

export interface AuthState {
  user: LoginResponseDto;
  error: string;
  loading: boolean;
}

const initialState: AuthState = {
  user: null,
  error: null,
  loading: false,
};

const _authReducer = createReducer<AuthState>(
  initialState,

  on(
    AuthActions.loginStart,
    AuthActions.signUpStart,
    (state) => ({
      ...state,
      user: null,
      error: null,
      loading: true,
    })),

  on(AuthActions.logout, (state) => ({
    ...state,
    user: null,
    uthError: null,
    loading: false,
  })),

  on(AuthActions.authenticateSuccess, (state, action) => ({
    ...state,
    user: action,
    error: null,
    loading: false,
  })),

  on(AuthActions.authenticateFail, (state, action) => ({
    ...state,
    error: action.errorMessage,
    loading: false,
  })),

  on(AuthActions.clearError, (state) => ({
    ...state,
    loading: false,
    error: null,
  })),

  on(AuthActions.signUpSuccess, () => (initialState))
);

export const authReducer = (state: AuthState, action: Action): AuthState => _authReducer(state, action);
