export const BASE_URL = 'http://51.38.236.79:8005';

export const AXIOS_LOGIN_CONFIG = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const AXIOS_LOGGED_CONFIG = (token: string) => {
  return {
    headers: {
      Authorization: `token ${token}`,
    },
  };
};
