import { EventEmitter } from '@angular/core';
import { tassign } from 'tassign';
import { DECREMENT, INCREMENT, CLEAR_ALL, ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from './actions';

export interface IAppState {
  newMessages: number;
  lastUpdated: Date;
  list: Array<object>;
}

export const INITIAL_STATE: IAppState = {
  newMessages: 0,
  lastUpdated: null,
  list: []
};

class TodoActions {
  public todoToggled = new EventEmitter();
  constructor(private state: IAppState, private action) { }

  increment() {
    return tassign(this.state, { newMessages: this.state.newMessages + 1 });
  }

  decrement() {
    if (this.state.newMessages === 0) {
      return this.state;
    }
    return tassign(this.state, { newMessages: this.state.newMessages - 1 });
  }

  addTodo() {
    const newTodo = { id: this.state.list.length + 1, title: this.action.title, isCompleted: false };
    return tassign(this.state, {
      lastUpdated: new Date(), list: this.state.list.concat(newTodo)
    });
  }

  removeTodo() {
    return tassign(this.state, {
      lastUpdated: new Date(),
      list: this.state.list.filter(i => i !== this.action.todo)
    });
  }

  toggleTodo() {
    this.action.todo.isCompleted = !this.action.todo.isCompleted;
    this.todoToggled.emit(this.action.todo);
    return tassign(this.state, { lastUpdated: new Date() });
  }

  clearAll() {
    return tassign(this.state, { lastUpdated: new Date(), list: [] });
  }
}

// tslint:disable-next-line: typedef
export function rootReducer(state: IAppState, action): IAppState {
  const todoActions = new TodoActions(state, action);
  switch (action.type) {
    case INCREMENT: return todoActions.increment();
    case DECREMENT: return todoActions.decrement();
    case ADD_TODO: return todoActions.addTodo();
    case TOGGLE_TODO: return todoActions.toggleTodo();
    case REMOVE_TODO: return todoActions.removeTodo();
    case CLEAR_ALL: return todoActions.clearAll();
  }
  return state;
}
