using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Piškvorky_NG.Controllers
{
    /// <summary>
    /// controller pre kurzovy listok view
    /// </summary>
    public class KurzovyListokController : Controller
    {
        /// <summary>
        /// volanie na view
        /// </summary>
        public ActionResult KurzovyListok()
        {
            return this.View();
        }

    }
}