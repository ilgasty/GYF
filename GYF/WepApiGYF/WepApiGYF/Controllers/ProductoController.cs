using BussinessGYF.Backend;
using BussinessGYF.DTOs;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WepApiGYF.Controllers
{
    public class ProductoController : MiControladorBase
    {


        [HttpGet]

        public async Task<ActionResult<List<ProductoReadDTO>>> GetAll()
        {

            return await Mediator.Send(new GetbyPresupuest.Ejecuta());
        }
        [HttpPost]
        public async Task<ActionResult<List<ProductoReadDTO>>> GetbyPresupuest(GetbyPresupuest.Ejecuta parametros)
        {

            return await Mediator.Send(parametros);
        }

    }
}
