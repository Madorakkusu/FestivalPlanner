import axios from 'axios';
import { ThunkDispatch } from 'redux-thunk';
import { AXIOS_LOGIN_CONFIG, AXIOS_LOGGED_CONFIG, BASE_URL } from '@helpers/OrbitalStation';
import { saveToken } from '../../containers/LoginPage/redux/actions';

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
