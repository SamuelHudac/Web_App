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
    /// controller pre data VsZP_Samoplatitelia
    /// </summary>
    public class VsZP_SamoplatiteliaController : ApiController
    {
        private DlzniciEntities db = new DlzniciEntities();

        /// <summary>
        /// get metoda api/VsZP_Samoplatitelia
        /// </summary>
        public IQueryable<VsZP_Samoplatitelia> GetVsZP_Samoplatitelia()
        {
            return db.VsZP_Samoplatitelia;
        }

        /// <summary>
        /// get metoda na data podla guidID api/VsZP_Samoplatitelia/GuidID
        /// </summary>
        /// <param name="id">GuidID v Dbo</param>
        [ResponseType(typeof(VsZP_Samoplatitelia))]
        public IHttpActionResult GetVsZP_Samoplatitelia(string id)
        {
            VsZP_Samoplatitelia vsZP_Samoplatitelia = db.VsZP_Samoplatitelia.Find(id);
            if (vsZP_Samoplatitelia == null)
            {
                return NotFound();
            }

            return Ok(vsZP_Samoplatitelia);
        }

        /// <summary>
        /// put metoda api/VsZP_Samoplatitelia
        /// </summary>
        /// <param name="id">GuidID v Dbo</param>
        /// <param name="vsZP_Samoplatitelia">model</param>
        [ResponseType(typeof(void))]
        public IHttpActionResult PutVsZP_Samoplatitelia(string id, VsZP_Samoplatitelia vsZP_Samoplatitelia)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != vsZP_Samoplatitelia.GuidID)
            {
                return BadRequest();
            }

            db.Entry(vsZP_Samoplatitelia).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VsZP_SamoplatiteliaExists(id))
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
        /// post metoda api/VsZP_Samoplatitelia
        /// </summary>
        /// <param name="vsZP_Samoplatitelia">model</param>
        [ResponseType(typeof(VsZP_Samoplatitelia))]
        public IHttpActionResult PostVsZP_Samoplatitelia(VsZP_Samoplatitelia vsZP_Samoplatitelia)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.VsZP_Samoplatitelia.Add(vsZP_Samoplatitelia);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (VsZP_SamoplatiteliaExists(vsZP_Samoplatitelia.GuidID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = vsZP_Samoplatitelia.GuidID }, vsZP_Samoplatitelia);
        }

        /// <summary>
        /// delete metoda podla guidID api/VsZP_Samoplatitelia/GuidID
        /// </summary>
        /// <param name="id">GuidID v Dbo</param>
        [ResponseType(typeof(VsZP_Samoplatitelia))]
        public IHttpActionResult DeleteVsZP_Samoplatitelia(string id)
        {
            VsZP_Samoplatitelia vsZP_Samoplatitelia = db.VsZP_Samoplatitelia.Find(id);
            if (vsZP_Samoplatitelia == null)
            {
                return NotFound();
            }

            db.VsZP_Samoplatitelia.Remove(vsZP_Samoplatitelia);
            db.SaveChanges();

            return Ok(vsZP_Samoplatitelia);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool VsZP_SamoplatiteliaExists(string id)
        {
            return db.VsZP_Samoplatitelia.Count(e => e.GuidID == id) > 0;
        }
    }
}