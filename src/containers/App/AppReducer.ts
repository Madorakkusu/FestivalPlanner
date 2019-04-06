import { combineReducers } from 'redux';
import { loginPageReducer } from '../LoginPage/redux/reducer';

export const AppReducer = combineReducers({
  loginPageReducer,
});
