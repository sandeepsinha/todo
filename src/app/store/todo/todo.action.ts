import { Action } from '@ngrx/store';

import {TodoState} from './todo.state';

export const  GET_TODOS = 'GET_TODOS';
export const  GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS';
export const  GET_TODOS_FAILURE = 'GET_TODOS_FAILURE';

export class GetTodos implements Action {
  readonly type = GET_TODOS;
}

export class GetTodosSuccess implements Action {
  readonly type = GET_TODOS_SUCCESS;
  constructor(public payload: TodoState[]) {}
}

export class GetTodosFailure implements Action {
  readonly type = GET_TODOS_FAILURE;
}

export type All = GetTodos | GetTodosSuccess | GetTodosFailure ;
