using AutoMapper;
using BussinessGYF.DTOs;
using DataAccessGYF.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BussinessGYF.Profiles
{
    class ConfiguracionBaseProfile:Profile
    {
        public ConfiguracionBaseProfile()
        {
            ///source ->Target
            ///

            //filtros
            CreateMap<Producto, ProductoReadDTO>();
        }

        }
    }
