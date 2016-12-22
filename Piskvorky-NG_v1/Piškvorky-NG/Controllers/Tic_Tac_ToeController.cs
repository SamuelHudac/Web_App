using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Piškvorky_NG.Controllers
{
    public class Tic_Tac_ToeController : Controller
    {
        // GET: Tic_Tac_Toe
        public ActionResult tic_tac_toe()
        {
            return this.View();
        }

        public void btnSL(object sender, EventArgs e)
        {
            
        }
    }
}