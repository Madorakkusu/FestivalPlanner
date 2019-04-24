import { assoc } from 'ramda';
import { STORE_CURRENT_FESTIVAL_ID, STORE_FESTIVALS } from '@app/AppConstants';

export const festivals = (state = {}, action) => {
  switch (action.type) {
    case STORE_FESTIVALS:
      return assoc('festivals', action.payload, state);
    case STORE_CURRENT_FESTIVAL_ID:
      return assoc('currentFestivalId', action.payload, state);
    default:
      return state;
  }
};
