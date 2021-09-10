import * as fromProjects from '../landing-page/components/projects/store/projects.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  projects: fromProjects.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  projects: fromProjects.projectsReducer,
};
