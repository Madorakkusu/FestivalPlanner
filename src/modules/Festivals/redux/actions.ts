import { STORE_FESTIVALS } from '@app/AppConstants';

export const storeFestivals = (response: any) => ({
  type: STORE_FESTIVALS,
  payload: response,
});
