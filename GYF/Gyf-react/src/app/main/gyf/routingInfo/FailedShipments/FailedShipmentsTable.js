import ShipmentsTable from 'app/main/companyApp/shipments/ShipmentsTable';

function FailedShipmentsTable({ failedShipments }) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <h1>Envios no ruteados</h1>
      </div>
      <ShipmentsTable failedShipments={failedShipments} />
    </div>
  );
}

export default FailedShipmentsTable;
