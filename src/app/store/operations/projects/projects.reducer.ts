import { Action, createReducer, on } from '@ngrx/store';
import { Project } from '@core/models/project';
import * as ProjectsActions from './projects.actions';

export interface State {
  projects: Project[];
  errorMessage: string;
  loading: boolean;
}

const initialState = {
  projects: [],
  errorMessage: null,
  loading: false,
};

const _projectsReducer = createReducer(
  initialState,
  on(ProjectsActions.fetchProjectsSuccess, (state, action) => ({
    ...state,
    projects: [...action.projects],
    errorMessage: null,
    loading: false,
  })),
  on(ProjectsActions.fetchProjects, (state, action) => ({
    ...state,
    errorMessage: null,
    loading: true,
  })),

  on(ProjectsActions.fetchProjectsFail, (state, action) => ({
    ...state,
    errorMessage: action.errorMessage,
    loading: false,
  })),

  on(ProjectsActions.clearError, (state) => ({
    ...state,
    loading: false,
    errorMessage: null,
  }))
);

export function projectReducer(state: State, action: Action): State {
  return _projectsReducer(state, action);
}
