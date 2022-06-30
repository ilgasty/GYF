import { createEntityAdapter, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const postRoute = createAsyncThunk('adminApp/route/create', async (filtros) => {
 // const response = await axios.get('http://JURNB-0156/Shipments/api/Values');
  //return response.data;
  return filtros;
});

const routeAdapter = createEntityAdapter({});

export const { selectAll: selectRoute } = routeAdapter.getSelectors(
  (state) => state.adminApp.routing
);

const routingSlice = createSlice({
  name: 'adminApp/route',
  initialState: routeAdapter.getInitialState(),
  reducers: {},
  extraReducers: {
    [postRoute.fulfilled]: (state, action) => action.payload,
  },
});

export default routingSlice.reducer;
