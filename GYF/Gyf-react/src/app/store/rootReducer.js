import { combineReducers } from '@reduxjs/toolkit';
import auth from 'app/auth/store';
import fuse from './fuse';
import i18n from './i18nSlice';
import  routing  from '../main/gyf/routingInfo/store/routingSlice';
import  producto  from '../main/gyf/routingInfo/store/routingproducto';
import sdetail from '../main/gyf/routingInfo/store/routingshipmentdetail'

const createReducer = (asyncReducers) => (state, action) => {
  const combinedReducer = combineReducers({
    auth,
    fuse,
    i18n,
    routing,
    producto,
    sdetail,
    ...asyncReducers,
  });

  /*
	Reset the redux store when user logged out
	 */
  if (action.type === 'auth/user/userLoggedOut') {
    state = undefined;
  }

  return combinedReducer(state, action);
};

export default createReducer;
