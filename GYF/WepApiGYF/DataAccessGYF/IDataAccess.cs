
using DataAccessGYF.Model;
using System.Collections.Generic;

namespace DataAccessGYF
{
    public interface IDataAccess
    {
        List<Producto> GetProductos();
    }
}