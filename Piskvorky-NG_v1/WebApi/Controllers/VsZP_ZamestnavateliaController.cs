using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using WebApi.Models;

namespace WebApi.Controllers
{
    /// <summary>
    /// controller pre data VsZP_Zamestnavatelia
    /// </summary>
    public class VsZP_ZamestnavateliaController : ApiController
    {
        private DlzniciEntities db = new DlzniciEntities();

        /// <summary>
        /// gett metoda api/VsZP_Zamestnavatelia
        /// </summary>
        public IQueryable<VsZP_Zamestnavatelia> GetVsZP_Zamestnavatelia()
        {
            return db.VsZP_Zamestnavatelia;
        }

        /// <summary>
        /// get metoda na data podla guidID api/VsZP_Zamestnavatelia/GuidID
        /// </summary>
        /// <param name="id">GuidID v Dbo</param>
        [ResponseType(typeof(VsZP_Zamestnavatelia))]
        public IHttpActionResult GetVsZP_Zamestnavatelia(string id)
        {
            VsZP_Zamestnavatelia vsZP_Zamestnavatelia = db.VsZP_Zamestnavatelia.Find(id);
            if (vsZP_Zamestnavatelia == null)
            {
                return NotFound();
            }

            return Ok(vsZP_Zamestnavatelia);
        }

        /// <summary>
        /// put metoda podla guidID api/VsZP_Zamestnavatelia
        /// </summary>
        /// <param name="id">GuidID v Dbo</param>
        /// <param name="vsZP_Zamestnavatelia">model</param>
        [ResponseType(typeof(void))]
        public IHttpActionResult PutVsZP_Zamestnavatelia(string id, VsZP_Zamestnavatelia vsZP_Zamestnavatelia)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != vsZP_Zamestnavatelia.GuidID)
            {
                return BadRequest();
            }

            db.Entry(vsZP_Zamestnavatelia).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VsZP_ZamestnavateliaExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        /// <summary>
        /// post metoda api/VsZP_Zamestnavatelia
        /// </summary>
        /// <param name="vsZP_Zamestnavatelia">model</param>
        [ResponseType(typeof(VsZP_Zamestnavatelia))]
        public IHttpActionResult PostVsZP_Zamestnavatelia(VsZP_Zamestnavatelia vsZP_Zamestnavatelia)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.VsZP_Zamestnavatelia.Add(vsZP_Zamestnavatelia);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (VsZP_ZamestnavateliaExists(vsZP_Zamestnavatelia.GuidID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = vsZP_Zamestnavatelia.GuidID }, vsZP_Zamestnavatelia);
        }

        /// <summary>
        /// delete metoda podla guidID api/VsZP_Zamestnavatelia/GuidID
        /// </summary>
        /// <param name="id">GuidID v Dbo</param>
        [ResponseType(typeof(VsZP_Zamestnavatelia))]
        public IHttpActionResult DeleteVsZP_Zamestnavatelia(string id)
        {
            VsZP_Zamestnavatelia vsZP_Zamestnavatelia = db.VsZP_Zamestnavatelia.Find(id);
            if (vsZP_Zamestnavatelia == null)
            {
                return NotFound();
            }

            db.VsZP_Zamestnavatelia.Remove(vsZP_Zamestnavatelia);
            db.SaveChanges();

            return Ok(vsZP_Zamestnavatelia);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool VsZP_ZamestnavateliaExists(string id)
        {
            return db.VsZP_Zamestnavatelia.Count(e => e.GuidID == id) > 0;
        }
    }
}