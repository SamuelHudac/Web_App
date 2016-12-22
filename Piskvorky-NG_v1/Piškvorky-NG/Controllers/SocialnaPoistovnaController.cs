using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Piškvorky_NG.Controllers
{
    /// <summary>
    /// controller pre view socialnej poistovne
    /// </summary>
    public class SocialnaPoistovnaController : Controller
    {
        /// <summary>
        /// volanie na view
        /// </summary>
        public ActionResult SocialnaPoistovna()
        {
            return this.View();
        }
    }
}