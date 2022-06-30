import React, { useEffect, useState } from 'react'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { postRouteProducto } from './store/routingproducto';
import { postRoute } from './store/routingSlice';
import { useFormContext, Controller } from 'react-hook-form';
import { useSelector } from 'react-redux';
export const FiltrosGYF = ({dispatch}) => {
	const envio = useSelector((state) => state.routing);
	const [filtro, setFiltro] = useState(envio);
	  
	  useEffect(() => {
		if (envio.ids==undefined){
			
			//console.log(envio.ids)
		}else{
			setFiltro({	"Numeropresupuesto":"0"
			});
			//console.log(filtro)
		}
		//console.log(filtro)
		dispatch(postRouteProducto(filtro));
		dispatch(postRoute(filtro));
		
	  }, [filtro]);
	  const {numeropresupuesto}=filtro;

	  
	
  return (
	<div className="flex flex-row space-x-4 justify-around" >
	 
	<div style={{marginLeft:'10px', marginTop: '60px'}}>
      <h3>Filtros</h3>
	  <TextField
	  	type="number"
        value={numeropresupuesto}
		
        label="Presupuesto Cliente"
        onChange={(e) => {
			const parsedInt = parseInt(e.target.value);

			if (parsedInt) {
				setFiltro({"Numeropresupuesto" : e.target.value})
			}
				 
        }}
		
      />
	  
    </div>
	</div>
  )
}
