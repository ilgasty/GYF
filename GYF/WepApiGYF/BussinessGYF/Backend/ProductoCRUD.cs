using AutoMapper;
using BussinessGYF.DTOs;
using DataAccessGYF;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace BussinessGYF.Backend
{
    public class ProductoNew
    {
        public class Ejecuta : IRequest<ProductoReadDTO>
        {
            public ProductoCreatedDTO Producto { get; set; }
        }
        public class Manager : IRequestHandler<Ejecuta, ProductoReadDTO>
        {
            public Task<ProductoReadDTO> Handle(Ejecuta request, CancellationToken cancellationToken)
            {

                throw new NotImplementedException();
            }
        }

    }
    public class GetAll
    {
        public class Ejecuta : IRequest<List<ProductoReadDTO>>
        {
          
        }
        public class Manager : IRequestHandler<Ejecuta, List<ProductoReadDTO>>
        {
            private readonly IDataAccess _data;
            private readonly DataAccesContext _context;
            private readonly IMapper _mapper;
            public Manager(IDataAccess data, DataAccesContext context, IMapper mapper)
            {
                _data = data;
                _context = context;
                _mapper = mapper;
            }
            public Task<List<ProductoReadDTO>> Handle(Ejecuta request, CancellationToken cancellationToken)
            {
                //List<ProductoReadDTO> list = new List<ProductoReadDTO>();
                //list.Add(new ProductoReadDTO() { id = 1, Precio = 10, FechaCarga = new DateTime(2008, 8, 29, 19, 27, 15), Categoria = "PRODUCTODOS" });
                var motivoSuspensionModel = _context.Producto.OrderBy(p => p.id).ToList();
                var ProductoDTOList = _mapper.Map<List<ProductoReadDTO>>(motivoSuspensionModel);
                return Task.FromResult(ProductoDTOList);
            }

          
        }
    }
    public class GetbyPresupuest
    {
        public class Ejecuta : IRequest<List<ProductoReadDTO>>
        {
            public double Numeropresupuesto { get; set; }
        }
        public class Manager : IRequestHandler<Ejecuta, List<ProductoReadDTO>>
        {
            

            private readonly DataAccesContext _context;
            private readonly IMapper _mapper;
            public Manager( DataAccesContext context, IMapper mapper)
            {
                
                _context = context;
                _mapper = mapper;
            }
            public Task<List<ProductoReadDTO>> Handle(Ejecuta request, CancellationToken cancellationToken)
            {
                double presupuesto = request.Numeropresupuesto;
                
                var productonModel = _context.Producto.Where(p => p.Precio <= presupuesto).ToList();
                var prodmax = productonModel.Where(x=> x.Precio== productonModel.Max(m=> m.Precio)).FirstOrDefault();
                List<ProductoReadDTO> list = new List<ProductoReadDTO>();
                if (prodmax==null) return Task.FromResult(list);
                presupuesto -= prodmax.Precio;
                
                var ProductoDTOs = _mapper.Map<ProductoReadDTO>(prodmax);
                list.Add(ProductoDTOs);
                foreach (var item in productonModel.GroupBy(g => g.Categoria).Where(x=>x.Key!= prodmax.Categoria))
                {
                    var itemmax = productonModel.Where(w => w.Categoria == item.Key && w.Precio <= presupuesto).OrderByDescending(o => o.Precio).FirstOrDefault();
                    if (itemmax == null) break;
                    var itemmaxDTOs = _mapper.Map<ProductoReadDTO>(itemmax);
                    list.Add(itemmaxDTOs);
                    presupuesto -= prodmax.Precio;
                    
                }
                
                return Task.FromResult(list);
            }


        }
    }
    public class GetbyProducto
    {
        public class Ejecuta : IRequest<List<ProductoReadDTO>>
        {
            public int IdProducto { get; set; }
        }
        public class Manager : IRequestHandler<Ejecuta, List<ProductoReadDTO>>
        {


            private readonly DataAccesContext _context;
            private readonly IMapper _mapper;
            public Manager(DataAccesContext context, IMapper mapper)
            {

                _context = context;
                _mapper = mapper;
            }
            public Task<List<ProductoReadDTO>> Handle(Ejecuta request, CancellationToken cancellationToken)
            {
                double idproducto = request.IdProducto;

                var productoModel = _context.Producto.Where(p => p.id == idproducto).ToList();


                var ProductoDTOs = _mapper.Map<List<ProductoReadDTO>>(productoModel);
               

                return Task.FromResult(ProductoDTOs);
            }


        }
    }
}

