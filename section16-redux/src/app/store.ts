import { IMessagingState, messagingReducer, MESSAGING_INITIAL_STATE } from './messaging/store';
import { ITaskingState, taskingReducer, TASKING_INITIAL_STATE } from './tasking/store';
import { combineReducers } from 'redux';

export interface IAppState {
  messaging: IMessagingState;
  tasking: ITaskingState;
}

export const INITIAL_STATE: IAppState = {
  messaging: MESSAGING_INITIAL_STATE,
  tasking: TASKING_INITIAL_STATE
};

export const rootReducer = combineReducers({
  tasking: taskingReducer,
  messaging: messagingReducer
});
