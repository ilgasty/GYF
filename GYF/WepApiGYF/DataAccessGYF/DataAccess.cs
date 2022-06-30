
using DataAccessGYF.Model;
using System;
using System.Collections.Generic;

namespace DataAccessGYF
{
    public class DataAccess : IDataAccess
    {
        private List<Producto> prod = new();
        public DataAccess()
        {

            prod.Add(new Producto() { id = 1, Precio = 10, FechaCarga = new DateTime(2008, 8, 29, 19, 27, 15), Categoria = "PRODUCTODOS" });

        }
        public List<Producto> GetProductos()
        {
            return prod;
        }

       
    }
}
