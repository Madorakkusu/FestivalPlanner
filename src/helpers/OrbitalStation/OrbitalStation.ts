import axios from 'axios';
import { ThunkDispatch } from 'redux-thunk';
import { AXIOS_LOGIN_CONFIG, BASE_URL } from '@helpers/OrbitalStation';
import { saveToken } from '@modules/LoginPage';
import { storeActualFestivalId, storeFestivals } from '@modules/Festivals';
import { resetCurrentFestival, storeCurrentFestival } from '@modules/Festival';

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

/**
 * Store current festival ID
 * @param id string
 */
export const storeCurrentFestivalId = (id: string) => (dispatch: ThunkDispatch<any, any, any>) => {
  dispatch(storeActualFestivalId(id));
};

export const resetFestival = () => (dispatch: ThunkDispatch<any, any, any>) => {
  dispatch(resetCurrentFestival());
};

/**
 * Get festival by ID
 * @param id string
 * @param token string
 */
export const getFestivalById = (id: string, { token }) => (dispatch: ThunkDispatch<any, any, any>) => {
  const config = {
    headers: {
      Authorization: `Token ${token}`,
    },
  };

  axios
    .get(`${BASE_URL}/api/festivals/${id}/`, config)
    .then(response => {
      console.log(response.data);
      dispatch(storeCurrentFestival(response.data));
    })
    .catch(errormsg => console.log(errormsg));
};
