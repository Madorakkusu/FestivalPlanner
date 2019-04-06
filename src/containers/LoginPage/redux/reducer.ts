import { assoc } from 'ramda';
import { SAVE_TOKEN } from '@app/AppConstants';

export const loginPageReducer = (state = {}, action) => {
  switch (action.type) {
    case SAVE_TOKEN:
      return assoc('token', action.payload, state);
    default:
      return state;
  }
};
