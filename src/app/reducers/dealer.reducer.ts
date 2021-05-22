import { Action } from '@ngrx/store';

export const ADD_DEALER = 'ADD_DEALER';
export const SET_DEALERS = 'SET_DEALERS';
export const REMOVE_DEALER = 'REMOVE_DEALER';

export function dealerReducer(state: string[] = [], action) {
  switch (action.type) {
    case ADD_DEALER:
      if (
        action.payload === null ||
        action.payload === undefined ||
        state.indexOf(action.payload) >= 0
      )
        return state;
      else return [...state, action.payload];
    case REMOVE_DEALER:
      const newState = state.filter(item => item !== action.payload);
      return newState;
    case SET_DEALERS:
      return action.payload;
    default:
      return state;
  }
}
