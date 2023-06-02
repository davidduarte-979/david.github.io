import { createAction, props } from '@ngrx/store';

export const authenticateSuccess = createAction(
  '[Auth] Authenticate Success',
  props<{
    email: string;
    userId: string;
    token: string;
    expirationDate: Date;
  }>()
);

export const loginStart = createAction(
  '[Auth] Login Start',
  props<{ email: string; password: string }>()
);

export const signUpStart = createAction(
  '[Auth] Signup Start',
  props<{ email: string; password: string }>()
);
export const logout = createAction('[Auth] Logout');

export const authenticateFail = createAction(
  '[Auth] Authenticate fail',
  props<{ errorMessage: string }>()
);

export const clearError = createAction('[Auth] Clear Error');

export const autoLogin = createAction('[Auth] Auto Login');
