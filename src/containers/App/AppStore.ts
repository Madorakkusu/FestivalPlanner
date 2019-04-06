import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { AppReducer } from '@app/AppReducer';

export const configureStore = () => {
  return createStore(AppReducer, composeWithDevTools(applyMiddleware(thunk)));
};
