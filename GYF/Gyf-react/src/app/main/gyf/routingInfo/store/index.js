import { combineReducers } from '@reduxjs/toolkit';
import routing from './routingSlice';
import routingproducto from './routingproducto';
import routingshipmentdetail from './routingshipmentdetail'; 

const reducer = combineReducers({
  routing,
  routingproducto,
  routingshipmentdetail,
});

export default reducer;
