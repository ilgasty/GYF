using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessGYF.Model
{
    public class Producto
    {
        
        public int id { get; set; }


        [StringLength(25)]
        public string Descripcion { get; set; }

        

        public double Precio { get; set; }

        
        [StringLength(50)]
        public string Categoria { get; set; }

       
        public DateTime FechaCarga { get; set; }
    }
}
