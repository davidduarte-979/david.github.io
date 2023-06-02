import * as fromProjects from './operations/projects/projects.reducer';
import * as fromAuth from './operations/auth/auth.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  projects: fromProjects.State;
  auth: fromAuth.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  projects: fromProjects.projectReducer,
  auth: fromAuth.authReducer,
};
