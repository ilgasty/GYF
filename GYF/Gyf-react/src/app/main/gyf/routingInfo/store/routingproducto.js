import { createEntityAdapter, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const postRouteProducto = createAsyncThunk('adminApp/route/createsproducto', async (filtros) => {

 
  
  const response = await axios.post('https://localhost:44331/api/Producto',filtros
  );
  console.log(response.data);
  return response.data;
});

const routeAdapterProducto = createEntityAdapter({});

export const { selectAll: selectRouteproducto } = routeAdapterProducto.getSelectors(
  (state) => state.adminApp.producto
);

const routingproducto = createSlice({
  name: 'adminApp/producto',
  initialState: routeAdapterProducto.getInitialState(),
  reducers: {},
  extraReducers: {
    [postRouteProducto.fulfilled]: (state, action) => action.payload,
  },
});

export default routingproducto.reducer;