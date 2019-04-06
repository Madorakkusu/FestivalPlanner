import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { AppReducer } from '@app/AppReducer';

export const store = createStore(AppReducer, composeWithDevTools(applyMiddleware(thunk)));
