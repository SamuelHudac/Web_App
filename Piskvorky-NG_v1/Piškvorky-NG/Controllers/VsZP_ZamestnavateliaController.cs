using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Piškvorky_NG.Controllers
{
    /// <summary>
    /// controller pre view VsZP_Zamestnavatelia
    /// </summary>
    public class VsZP_ZamestnavateliaController : Controller
    {
        /// <summary>
        /// volanie na view
        /// </summary>
        public ActionResult VsZP_Zamestnavatelia()
        {
            return this.View();
        }
    }
}