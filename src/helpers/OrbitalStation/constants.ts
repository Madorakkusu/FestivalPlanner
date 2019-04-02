export const BASE_URL = 'http://51.38.236.79:8005';

export const loginConfig = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
};

export const userConfig = (token: string) => {
  const config = {
    headers: {
      Authorization: `token ${token}`,
    },
  };
  return config;
};
