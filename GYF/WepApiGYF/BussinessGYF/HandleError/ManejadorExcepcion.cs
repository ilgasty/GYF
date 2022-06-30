using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace BussinessGYF.HandleError
{
    class ManejadorExcepcion : Exception
    {
        public HttpStatusCode _httpstatuscode;
        public object _errores;

        public ManejadorExcepcion(HttpStatusCode httpStatusCode, object errores = null)
        {
            _httpstatuscode = httpStatusCode;

            _errores = errores;
        }
    }
}

