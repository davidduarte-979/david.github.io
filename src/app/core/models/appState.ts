import * as projectsReducer from '../../store/operations/projects/projects.reducer';
import * as authReducer from '../../store/operations/auth/auth.reducer';

export interface AppState {
  projects: projectsReducer.State;
  auth: authReducer.State;
}