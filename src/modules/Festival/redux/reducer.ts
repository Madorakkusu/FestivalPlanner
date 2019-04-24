import { assoc } from 'ramda';
import { STORE_CURRENT_FESTIVAL, RESET_CURRENT_FESTIVAL } from '@app/AppConstants';

export const festival = (state = {}, action) => {
  switch (action.type) {
    case STORE_CURRENT_FESTIVAL:
      return assoc('current', action.payload, state);
    case RESET_CURRENT_FESTIVAL:
      return assoc('current', action.payload, state);
    default:
      return state;
  }
};
