import { TodoState } from './todo.state';
import { Injectable } from '@angular/core';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';

import * as TodoActions from './todo.action';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable()
export class TodoEffects {

  constructor(
    private http: HttpClient,
    private actions$: Actions
  ) { }

  @Effect()
  GetTodos$: Observable<Action> = this.actions$.pipe(
    ofType(TodoActions.GET_TODOS),
    mergeMap(action =>
      this.http.get('https://forumtw-api.herokuapp.com/api/questions').pipe(
        map(data => {
          const todoData = [{
            title: 'title1',
            description: 'title 1 description'
          }];
          return new TodoActions.GetTodosSuccess(todoData as TodoState[]);
        }),
        catchError(() =>
          of(new TodoActions.GetTodosFailure())
        )
      )
    )
  );
}
