import { combineReducers } from 'redux';
import { loginPage } from '@modules/LoginPage';
import { festivals } from '@modules/Festivals';
import { festival } from '@modules/Festival';

export const AppReducer = combineReducers({
  loginPage,
  festivals,
  festival,
});
