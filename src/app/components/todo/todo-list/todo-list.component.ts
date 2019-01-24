import { TodoListState, TodoState } from '../../../store/todo/todo.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import * as TodoAction from '../../../store/todo/todo.action';

export interface AppState {

  todos: TodoListState;

}

@Component({

  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {


  constructor(
    private store: Store<TodoListState>
  ) {
  }


  todoListState$: Observable<TodoState[]>;

  ngOnInit() {

    this.todoListState$ = this.store.select(state => {
      return state.todos;
    });

    this.store.dispatch(new TodoAction.GetTodos());

  }
}
