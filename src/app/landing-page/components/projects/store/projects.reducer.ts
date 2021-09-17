import { Project } from '@core/models/project';
import * as ProjectsActions from './projects.actions';

export interface State {
  projects: Project[];
}

const initialState = {
  projects: [],
};

export function projectsReducer(state = initialState, action: ProjectsActions.projectsActions): any {
  switch (action.type) {
    case ProjectsActions.SET_PROJECTS:
      return {
        ...state,
        projects: [...action.payload]
      };
    default:
      return state;
  }
}
