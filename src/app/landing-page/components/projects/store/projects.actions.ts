import { Action } from '@ngrx/store';
import { Project } from '../../../../core/models/project';
export const GET_PROJECTS = '[NameSpace] GET_PROJECTS';

export class GetProjects implements Action {
  readonly type = GET_PROJECTS;
  payload: Project[];
}
