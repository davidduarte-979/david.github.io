import { Project } from '@core/models/project';
import * as ProjectsActions from './projects.actions';

export interface State {
  projects: Project[];
}

const initialState = {
  projects: [],
};

export function projectsReducer(state = initialState, action: ProjectsActions.GetProjects) {
  switch (action.type) {
    case ProjectsActions.GET_PROJECTS: {
      return {
        ...state,
        projectsArray: [...state.projects, action.payload]
      };
    }

    default: {
      return state;
    }
  }
}
