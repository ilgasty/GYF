using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BussinessGYF.DTOs
{
   public class ProductoReadDTO
    {
        [Key]
        public int id { get; set; }

        
       
        public string Descripcion { get; set; }

        
        
        public double Precio { get; set; }

    
        
        public string Categoria { get; set; }

       
        public DateTime FechaCarga { get; set; }

    }
    public class ProductoCreatedDTO
    {
        [Key]
        public int id { get; set; }


        [StringLength(25)]
        public string Descripcion { get; set; }

        [Required]

        public double Precio { get; set; }

        [Required]
        [StringLength(50)]
        public string Categoria { get; set; }

        [Required]
        public DateTime FechaCarga { get; set; }

    }
}
