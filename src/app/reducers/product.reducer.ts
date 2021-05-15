// product.reducer.ts

import { Action } from '@ngrx/store';

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const SET_PRODUCTS = 'SET_PRODUCTS';

export function productReducer(state: string[] = [], action) {
  switch (action.type) {
    case ADD_PRODUCT:
      if (!state.indexOf(action.payload)) return state;
      else return [...state, action.payload];
    case SET_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
}
