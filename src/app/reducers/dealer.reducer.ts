import { Action } from '@ngrx/store';

export const ADD_DEALER = 'ADD_DEALER';
export const SET_DEALERS = 'SET_DEALERS';

export function dealerReducer(state: string[] = [], action) {
  switch (action.type) {
    case ADD_DEALER:
      if (!state.indexOf(action.payload)) return state;
      else return [...state, action.payload];
    case SET_DEALERS:
      return action.payload;
    default:
      return state;
  }
}
