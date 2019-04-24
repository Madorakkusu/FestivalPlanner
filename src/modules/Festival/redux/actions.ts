import { STORE_CURRENT_FESTIVAL, RESET_CURRENT_FESTIVAL } from '@app/AppConstants';

export const storeCurrentFestival = (response: any) => ({
  type: STORE_CURRENT_FESTIVAL,
  payload: response,
});

export const resetCurrentFestival = () => ({
  type: RESET_CURRENT_FESTIVAL,
  payload: 0,
});
