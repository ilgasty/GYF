import FusePageCarded from '@fuse/core/FusePageCarded';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import { useTheme, styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import withReducer from 'app/store/withReducer';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useDeepCompareEffect } from '@fuse/hooks';
import reducer from '../../../store';
import  { getRouteSDetail}  from '../routingInfo/store/routingshipmentdetail';
import { convertCompilerOptionsFromJson } from 'typescript';




const Root = styled(FusePageCarded)(({ theme }) => ({
  '& .FusePageCarded-header': {
    minHeight: 72,
    height: 72,
    alignItems: 'center',
  },
}));

function producto(props) {
  const dispatch = useDispatch();
  const producto = useSelector((state) => state.sdetail);

  const theme = useTheme();

  const routeParams = useParams();

  const [noProducto, setNoProducto] = useState(false);

  useDeepCompareEffect(() => {
   
    dispatch(getRouteSDetail(routeParams));
  }, [dispatch, routeParams]);

 

  if (noProducto) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.1 } }}
        className="flex flex-col flex-1 items-center justify-center h-full"
      >
        <Typography color="textSecondary" variant="h5">
          No existe el Producto
        </Typography>
        <Button
          className="mt-24"
          component={Link}
          variant="outlined"
          to="/example"
          color="inherit"
        >
          Volver al listado
        </Button>
      </motion.div>
    );
  }

  return (
    <Root
      header={
        
        producto && (
          <div className="flex flex-1 w-full items-center justify-between">
            <div className="flex flex-1 flex-col items-center sm:items-start">
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1, transition: { delay: 0.3 } }}
              >
                <Typography
                  className="flex items-center sm:mb-12"
                  component={Link}
                  role="button"
                  to="/GYF"
                  color="inherit"
                >
                  <Icon className="text-20">
                    {theme.direction === 'ltr' ? 'arrow_back' : 'arrow_forward'}
                  </Icon>
                  <span className="mx-4 font-medium">Envíos</span>
                </Typography>
              </motion.div>

              <div className="flex flex-col min-w-0 items-center sm:items-start">
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1, transition: { delay: 0.3 } }}
                >
                  <Typography className="text-16 sm:text-20 truncate font-semibold">
                    {`Producto #${routeParams.producto}`}
                  </Typography>
                </motion.div>
              </div>
            </div>
          </div>
        )
      }
      content={
        producto && (
          <div className="p-16 sm:p-24">
           
          </div>
        )
      }
      innerScroll
    />
  );
}

export default withReducer('companyApp', reducer)(producto);