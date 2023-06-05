import * as projectsReducer from './operations/projects/projects.reducer';
import * as authReducer from './operations/auth/auth.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '@core/models/appState';

export const appReducer: ActionReducerMap<AppState> = {
  projects: projectsReducer.projectReducer,
  auth: authReducer.authReducer,
};
