import axios from 'axios';
import { ThunkDispatch } from 'redux-thunk';
import { AXIOS_LOGIN_CONFIG, AXIOS_LOGGED_CONFIG, BASE_URL } from '@helpers/OrbitalStation';
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
export const getFestivals = (token: string) => (dispatch: ThunkDispatch<any, any, any>) => {
  axios
    .get(`${BASE_URL}/api/festivals/`, AXIOS_LOGGED_CONFIG(token))
    .then(response => {
      console.log(response.data);
      dispatch(storeFestivals(response.data));
    })
    .catch(errormsg => console.log(errormsg));
};
