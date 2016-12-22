using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Piškvorky_NG.Controllers
{
    public class PiskvorkyController : Controller
    {
        // GET: Piskvorky
        public ActionResult MainView()
        {
            return this.View();
        }
    }
}