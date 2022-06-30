import FuseScrollbars from '@fuse/core/FuseScrollbars';
import _ from '@lodash';
import { BottomNavigation, Button } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Fragment, useState } from 'react';
import { withRouter } from 'react-router-dom';


import GyfTableHead from './GyfTableHead';

function GyfTable(props) {
  const{producto,history}=props;
  const [selected, setSelected] = useState([]);
  const [sortingField, setSortingField] = useState({
    direction: 'asc',
    id: null,
  });
  
function handleClick(sh){

  history.push(`/crudProd/${sh.id}`);
}
  function handleRequestSort(event, property) {
    const id = property;
    let direction = 'desc';

    if (sortingField.id === property && sortingField.direction === 'desc') {
      direction = 'asc';
    }

    setSortingField({
      direction,
      id,
    });
  }

  function handleDeselect() {
    setSelected([]);
  }
 
  function handleCheck(event, id) {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === _.size(selected) - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  }
  
  return (
    <div className="w-full flex flex-col">
      <FuseScrollbars className="flex-grow overflow-x-auto">
     
        <Table stickyHeader className="min-w-xl" aria-labelledby="tableTitle">
          <GyfTableHead
            selectedShipmentIds={selected}
            shipment={sortingField}
            onRequestSort={handleRequestSort}
            onMenuItemClick={handleDeselect}
          />
          <TableBody>
            {_.map(producto, (prod) => {
              //console.log(pieza)
              const { id, precio,fechaCarga ,categoria} = prod;
              return (
               
                <TableRow key={id} className="h-72 cursor-pointer" hover role="checkbox" onClick={(event)=>handleClick(prod)}>
                  <TableCell className="p-4 md:p-16" component="th" scope="row" align="center" >
                    {id}
                  </TableCell>

                  <TableCell className="p-4 md:p-16" component="th" scope="row" align="center">
                    {precio}
                  </TableCell>
                  <TableCell className="p-4 md:p-16" component="th" scope="row" align="center">
                    {fechaCarga}
                    
                  </TableCell>
                  <TableCell className="p-4 md:p-16" component="th" scope="row" align="center">
                    {categoria}
                  </TableCell>
                  
                  
                 
                </TableRow>
                // {/* <Button variant="contained" color="secondary" onClick={()=>{handleClikButton(pieza)}}>
                //     Clonar
                //   </Button>
                // */}
              );
            })}
          </TableBody>
        </Table>
      </FuseScrollbars>
    </div>
  );
}

export default withRouter(GyfTable);
