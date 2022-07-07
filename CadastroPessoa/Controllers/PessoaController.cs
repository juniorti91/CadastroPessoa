using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CadastroPessoa.Controllers
{
    public class PessoaController : Controller
    {
        public ActionResult Cadastrar()
        {
            return View();
        }
    }
}