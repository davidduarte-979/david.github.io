import { createAction, props } from '@ngrx/store';
import { Project } from '../../../core/models/project';

export const fetchProjectsSuccess = createAction(
  '[Projects] Set Projects',
  props<{ projects: Project[] }>()
);
export const fetchProjects = createAction('[Projects] Fetch Projects');

export const fetchProjectsFail = createAction(
  '[Projects] Fail Fetch Projects',
  props<{ errorMessage: string }>()
);

export const clearError = createAction('[Projects] Clear Error');
