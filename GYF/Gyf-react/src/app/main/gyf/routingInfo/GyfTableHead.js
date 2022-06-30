import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import { useState } from 'react';
import TableHead from '@mui/material/TableHead';


const rows = [
  {
    id: 'id',
    align: 'center',
    disablePadding: false,
    label: 'Id Producto',
    sort: true,
  },
  {
    id: 'Precio',
    align: 'center',
    disablePadding: false,
    label: 'Precio',
    sort: true,
  },
  {
    id: 'FechaCarga',
    align: 'center',
    disablePadding: false,
    label: 'Fecha de carga',
    sort: true,
  },
  {
    id: 'Categoria',
    align: 'center',
    disablePadding: false,
    label: 'Categoria',
    sort: true,
  },
  
  
];

function GyfTableHead(props) {
  const { selectedShipmentIds } = props;
  const numSelected = selectedShipmentIds.length;

  const [selectedShipmentsMenu, setSelectedShipmentsMenu] = useState(null);

  const createSortHandler = (property) => (event) => {
    props.onRequestSort(event, property);
  };

  function openSelectedShipmentsMenu(event) {
    setSelectedShipmentsMenu(event.currentTarget);
  }

  return (
    <TableHead>
      <TableRow className="h-48 sm:h-64">
        {rows.map((row) => {
          return (
            <TableCell
              className="p-4 md:p-16"
              key={row.id}
              align={row.align}
              padding={row.disablePadding ? 'none' : 'normal'}
              sortDirection={props.shipment.id === row.id ? props.shipment.direction : false}
            >
              {row.sort && (
                <TableSortLabel
                  active={props.shipment.id === row.id}
                  direction={props.shipment.direction}
                  onClick={createSortHandler(row.id)}
                  className="font-semibold"
                >
                  {row.label}
                </TableSortLabel>
              )}
            </TableCell>
          );
        }, this)}
      </TableRow>
    </TableHead>
  );
}

export default GyfTableHead;
