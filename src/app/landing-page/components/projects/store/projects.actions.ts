import { Action } from '@ngrx/store';
import { Project } from '../../../../core/models/project';
export const SET_PROJECTS = '[Projects] Set Projects';
export const FETCH_PROJECTS = '[Projects] Fetch Projects';

export class SetProjects implements Action {
  readonly type = SET_PROJECTS;
  constructor(public payload: Project[]) {}
}

export class FetchProjects implements Action {
  readonly type = FETCH_PROJECTS;
}

export type projectsActions = SetProjects | FetchProjects;
