// product.reducer.ts

import { Action } from '@ngrx/store';

export const ADD_PRODUCT = 'ADD_PRODUCT';

export function productReducer(state: string[] = [], action) {
  switch (action.type) {
    case ADD_PRODUCT:
      if (!state.indexOf(action.payload)) return state;
      else return [...state, action.payload];
    default:
      return state;
  }
}
