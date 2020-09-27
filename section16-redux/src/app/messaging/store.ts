import { EventEmitter } from '@angular/core';
import { tassign } from 'tassign';
import { DECREMENT, INCREMENT } from './action';

export interface IMessagingState {
  newMessages: number;
}

export const MESSAGING_INITIAL_STATE: IMessagingState = {
  newMessages: 0,
};

class TodoActions {
  public todoToggled = new EventEmitter();
  constructor(private state: IMessagingState, private action) { }

  increment() {
    return tassign(this.state, { newMessages: this.state.newMessages + 1 });
  }

  decrement() {
    if (this.state.newMessages === 0) {
      return this.state;
    }
    return tassign(this.state, { newMessages: this.state.newMessages - 1 });
  }
}

// tslint:disable-next-line: typedef
export function messagingReducer(state: IMessagingState = MESSAGING_INITIAL_STATE, action): IMessagingState {
  const todoActions = new TodoActions(state, action);
  switch (action.type) {
    case INCREMENT: return todoActions.increment();
    case DECREMENT: return todoActions.decrement();
  }
  return state;
}
