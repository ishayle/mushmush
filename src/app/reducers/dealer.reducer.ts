import { Action } from '@ngrx/store';

export const ADD_DEALER = 'ADD_DEALER';

export function dealerReducer(state: string[] = [], action) {
  switch (action.type) {
    case ADD_DEALER:
      if (!state.indexOf(action.payload)) return state;
      else return [...state, action.payload];
    default:
      return state;
  }
}
