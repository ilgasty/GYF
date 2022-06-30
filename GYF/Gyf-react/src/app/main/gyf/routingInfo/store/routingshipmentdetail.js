import { createEntityAdapter, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getRouteSDetail = createAsyncThunk('adminApp/route/createshipmentdetail', async ({shipmentid}) => {
  
  //const response = await axios.get(`http://localhost/Shipments/api/Notificacion/${shipmentid}`);
  const ciudad={  "Security":{"login":"0102000317",
                  "password":"a64426206905ca"
                  },"Piezas":[   
                  {"nropiezacliente" : shipmentid}]
                }
  const response = await axios.post(`http://localhost:58949/api/Pieza/ConsultaTracexPieza`,ciudad);
  //console.log(response.data);
  return response.data;
});

const routeAdapterSDetail = createEntityAdapter({});

export const { selectAll: selectRouteshipmentdetail } = routeAdapterSDetail.getSelectors(
  (state) => state.adminApp.sdetail
);

const routingsdetail = createSlice({
  name: 'adminApp/shipment',
  initialState: routeAdapterSDetail.getInitialState(),
  reducers: {},
  extraReducers: {
    [getRouteSDetail.fulfilled]: (state, action) => action.payload,
  },
});

export default routingsdetail.reducer;