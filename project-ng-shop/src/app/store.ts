import { cartReducer, CART_INITIAL_STATE, ICartState } from './products/store';
import { combineReducers } from 'redux';

export interface IAppState {
  cart: ICartState;
}

export const INITIAL_STATE: IAppState = {
  cart: CART_INITIAL_STATE
};

export const rootReducer = combineReducers({
  cart: cartReducer
});
