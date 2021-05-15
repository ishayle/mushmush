// product.reducer.ts

import { Action } from '@ngrx/store';
import { Order } from '../model/order';

export const ADD_ORDER = 'ADD_ORDER';
export const UPDATE_ORDER = 'UPDATE_ORDER';
export const SET_ORDERS = 'SET_ORDERS';

export function orderReducer(state: Order[] = [], action) {
  switch (action.type) {
    case ADD_ORDER:
      return [...state, action.payload];
    case UPDATE_ORDER:
      return state.map((value, index) =>
        value.id === action.payload.id ? { ...action.payload } : value
      );
    case SET_ORDERS:
      return action.payload;
    default:
      return state;
  }
}
