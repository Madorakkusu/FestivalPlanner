import { SAVE_TOKEN } from '@app/AppConstants';

export const saveToken = (token: string) => ({
  type: SAVE_TOKEN,
  payload: token,
});
