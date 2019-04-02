import axios from 'axios';
import { BASE_URL, loginConfig } from '@helpers/OrbitalStation';

const login = (username: string, password: string) => {
  const params = {
    username,
    password,
  };

  axios.create(loginConfig);

  axios
    .post(`${BASE_URL}/api/auth/`, params)
    .then(response => console.log(response.data))
    .catch(response => console.log(response.status));
};

const getMethod = (url: string) => false;
const postMethod = () => false;
const deleteMethod = () => false;
const putMethod = () => false;
const patchMethod = () => false;

export const OrbitalStation = {
  login,
  getMethod,
  postMethod,
  deleteMethod,
  putMethod,
  patchMethod,
};
