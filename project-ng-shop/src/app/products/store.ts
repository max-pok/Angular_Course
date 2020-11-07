import { Product } from './../utilities/models/product';
import { tassign } from 'tassign';
import { ADD_TO_CART, REMOVE_FROM_CART } from './actions';

export interface ICartState {
  count: number;
  products_list: {
    product: Product,
    amount: number
  }[];
}

export const CART_INITIAL_STATE: ICartState = {
  count: 0,
  products_list: []
};

class TodoActions {
  constructor(private state: ICartState, private action) { }

  increment() {
    let item = { product: this.action.product, amount: 1 };
    let index = 0;
    for (let p of this.state.products_list) {      
      if (p.product.title === this.action.product.title) {
        this.state.products_list[index].amount++;
        return tassign(this.state, {
          count: this.state.count + 1,
          products_list: this.state.products_list
        });
      }
      index++;
    }
    
    return tassign(this.state, {
      count: this.state.count + 1,
      products_list: this.state.products_list.concat(item)
    });
  }

  decrement() {
    if (this.state.count === 0) {
      return this.state;
    }
    
    let index = 0;
    for (let p of this.state.products_list) {
      if (p.product.title === this.action.product.title) {        
        this.state.products_list[index].amount--;
              
        if (this.state.products_list[index].amount === 0) {
          this.state.products_list.splice(index, 1);
          return tassign(this.state, { count: this.state.count - 1, products_list: this.state.products_list });
        }
        return tassign(this.state, { count: this.state.count - 1, products_list: this.state.products_list });
      }
      index++;
    }

    return this.state;
  }
}

export function cartReducer(state: ICartState = CART_INITIAL_STATE, action): ICartState {
  const todoActions = new TodoActions(state, action);
  switch (action.type) {
    case ADD_TO_CART: return todoActions.increment();
    case REMOVE_FROM_CART: return todoActions.decrement();
  }
  return state;
}
