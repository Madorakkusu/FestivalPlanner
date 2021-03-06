import axios from 'axios';
import { ThunkDispatch } from 'redux-thunk';
import { AXIOS_LOGIN_CONFIG, BASE_URL } from '@helpers/OrbitalStation';
import { saveToken } from '@modules/LoginPage/redux/actions';
import { storeFestivals } from '@modules/Festivals/redux/actions';

/**
 * Login function to get the API Token
 * @param username string
 * @param password string
 */
export const login = (username: string, password: string) => (dispatch: ThunkDispatch<any, any, any>) => {
  const params = {
    username,
    password,
  };

  axios
    .post(`${BASE_URL}/api/auth/`, params, AXIOS_LOGIN_CONFIG)
    .then(response => dispatch(saveToken(response.data)))
    .catch(errormsg => console.log(errormsg));
};

/**
 * Get all the festivals
 * @param token string
 */
export const getFestivals = ({ token }) => (dispatch: ThunkDispatch<any, any, any>) => {
  const config = {
    headers: {
      Authorization: `Token ${token}`,
    },
  };

  axios
    .get(`${BASE_URL}/api/festivals/`, config)
    .then(response => dispatch(storeFestivals(response.data)))
    .catch(errormsg => console.log(errormsg));
};

export const gesFestivalById = (id: number, token) => (dispatch: ThunkDispatch<any, any, any>) => {
  const config = {
    headers: {
      Authorization: `Token ${token}`,
    },
  };

  axios
    .get(`${BASE_URL}/api/festival/${id}/`, config)
    .then(response => console.log(response.data))
    .catch(errormsg => console.log(errormsg));
};
