using DataAccessGYF.Model;

using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessGYF
{
   public class DataAccesContext : DbContext
    {
        public DataAccesContext(DbContextOptions<DataAccesContext> options) : base(options)
        {

        }
       
        public DbSet<Producto> Productos { get; set; }
        public DbSet<Producto> Producto { get; set; }
    }
}
