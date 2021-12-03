import * as fromProjects from '../landing-page/components/projects/store/projects.reducer';
import * as fromAuth from '../admin/auth/store/auth.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  projects: fromProjects.State;
  auth: fromAuth.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  projects: fromProjects.projectReducer,
  auth: fromAuth.authReducer,
};
