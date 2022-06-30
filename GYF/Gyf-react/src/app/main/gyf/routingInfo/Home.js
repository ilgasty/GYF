import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postRoute } from './store/routingSlice';
import { postRouteProducto } from './store/routingproducto';

import GifTable from './GyfTable';
import { FiltrosGYF } from './FiltrosGYF';


function Home() {
  const dispatch = useDispatch();
  
  const envio = useSelector((state) => state.routing);
  const {producto} = useSelector((state) => state);
  const container = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  

  return (
    <div className="flex flex-col mx-8">
      <FiltrosGYF dispatch={dispatch}/>
      {/* <motion.div className="flex" variants={container} initial="hidden" animate="show">
        <CardRouting envio={envio} />
      </motion.div> */}
      <motion.div className="flex" variants={container} initial="hidden" animate="show">
        <GifTable producto={producto} dispatch={dispatch} />
      </motion.div>
    </div>
  );
}

export default Home;
