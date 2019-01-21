import Todo from '../../models/todo.model';

export interface TodoState extends Todo {
  editing: boolean;
}

export interface TodoListState {
  todos: TodoState[];
  loading: boolean;
  loaded: boolean;
  error: boolean;
}

