using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Piškvorky_NG.Controllers
{
    /// <summary>
    /// controller pre view Union 
    /// </summary>
    public class UnionController : Controller
    {
        /// <summary>
        /// volanie na view
        /// </summary>
        public ActionResult Union()
        {
            return this.View();
        }
    }
}