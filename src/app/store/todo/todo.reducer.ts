import {TodoListState, TodoState} from './todo.state';
import * as TodoActions from './todo.action';

const todos: TodoState[] = [{
  title: 'Initial TODO',
  description: ' my initial list',
  status: '',
  editing: false
}];

const initialState: TodoListState = {
  todos,
  loading: false,
  loaded: false,
  error: false
};

const TodoReducer = (state= initialState, action) => {
  switch (action.type) {
    case TodoActions.GET_TODOS:
      return { ...state, loaded: false, loading: true };

    case  TodoActions.GET_TODOS_SUCCESS:
      return { ...state, todos: action.payload, loading: false, loaded: true };

    case TodoActions.GET_TODOS_FAILURE:
      return { ...state, error: true, loaded: true, loading: false };
  }
};

export default TodoReducer;
