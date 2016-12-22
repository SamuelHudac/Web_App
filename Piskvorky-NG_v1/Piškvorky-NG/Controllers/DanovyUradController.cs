using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Piškvorky_NG.Controllers
{
    /// <summary>
    /// controller danovy urad view
    /// </summary>
    public class DanovyUradController : Controller
    {
        /// <summary>
        /// volanie na view
        /// </summary>
        public ActionResult DanovyUrad()
        {
            return this.View();
        }
    }
}