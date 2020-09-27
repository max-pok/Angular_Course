import { EventEmitter } from '@angular/core';
import { tassign } from 'tassign';
import { CLEAR_ALL, ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from './action';

export interface ITaskingState {
  lastUpdated: Date;
  list: Array<object>;
}

export const TASKING_INITIAL_STATE: ITaskingState = {
  lastUpdated: null,
  list: []
};

class TodoActions {
  todoToggled = new EventEmitter();

  constructor(private state: ITaskingState, private action) { }

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
export function taskingReducer(state: ITaskingState = TASKING_INITIAL_STATE, action): ITaskingState {
  const todoActions = new TodoActions(state, action);
  switch (action.type) {
    case ADD_TODO: return todoActions.addTodo();
    case TOGGLE_TODO: return todoActions.toggleTodo();
    case REMOVE_TODO: return todoActions.removeTodo();
    case CLEAR_ALL: return todoActions.clearAll();
  }
  return state;
}
