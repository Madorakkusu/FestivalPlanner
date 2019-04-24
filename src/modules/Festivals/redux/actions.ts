import { STORE_CURRENT_FESTIVAL_ID, STORE_FESTIVALS } from '@app/AppConstants';

export const storeFestivals = (response: any) => ({
  type: STORE_FESTIVALS,
  payload: response,
});

export const storeActualFestivalId = (id: any) => ({
  type: STORE_CURRENT_FESTIVAL_ID,
  payload: id,
});
