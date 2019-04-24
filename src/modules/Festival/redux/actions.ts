import { STORE_CURRENT_FESTIVAL } from '@app/AppConstants';

export const storeCurrentFestival = (response: any) => ({
  type: STORE_CURRENT_FESTIVAL,
  payload: response,
});
