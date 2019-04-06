import { combineReducers } from 'redux';
import { loginPage } from '@modules/LoginPage/redux/reducer';
import { festivals } from '@modules/Festivals/redux/reducer';

export const AppReducer = combineReducers({
  loginPage,
  festivals,
});
