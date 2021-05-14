// product.reducer.ts

import { Action } from '@ngrx/store';
import { Order } from '../model/order';

export const ADD_ORDER = 'ADD_ORDER';
export const UPDATE_ORDER = 'UPDATE_ORDER';

export function orderReducer(state: Order[] = [], action) {
  switch (action.type) {
    case ADD_ORDER:
      return [...state, action.payload];
    case UPDATE_ORDER:
      return state.map((value, index) =>
        value.id === action.payload.id ? { ...action.payload } : value
      );

    default:
      return state;
  }
}
