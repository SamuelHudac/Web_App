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

// test

namespace WebApi.Controllers
{
    /// <summary>
    /// controller pre data zdravotnej poistovne UNION
    /// </summary>
    public class Zp_UnionController : ApiController
    {
        private DlzniciEntities db = new DlzniciEntities();

        /// <summary>
        /// get metoda pre vsetky data zp UNION api/ZP_Union
        /// </summary>
        public IQueryable<Zp_Union> GetZp_Union()
        {
            return db.Zp_Union;
        }

        /// <summary>
        /// get metoda na data podla guidID api/ZP_Union/GuidID
        /// </summary>
        /// <param name="id">GuidID v Dbo</param>
        [ResponseType(typeof(Zp_Union))]
        public IHttpActionResult GetZp_Union(string id)
        {
            Zp_Union zp_Union = db.Zp_Union.Find(id);
            if (zp_Union == null)
            {
                return NotFound();
            }

            return Ok(zp_Union);
        }

        /// <summary>
        /// put metoda podla guidID api/ZP_Union
        /// </summary>
        /// <param name="id">GuidID v Dbo</param>
        /// <param name="zp_Union">model</param>
        [ResponseType(typeof(void))]
        public IHttpActionResult PutZp_Union(string id, Zp_Union zp_Union)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != zp_Union.GuidID)
            {
                return BadRequest();
            }

            db.Entry(zp_Union).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Zp_UnionExists(id))
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
        /// post metoda podla guidID api/ZP_Union
        /// </summary>
        /// <param name="zp_Union">model</param>
        [ResponseType(typeof(Zp_Union))]
        public IHttpActionResult PostZp_Union(Zp_Union zp_Union)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Zp_Union.Add(zp_Union);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (Zp_UnionExists(zp_Union.GuidID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = zp_Union.GuidID }, zp_Union);
        }

        /// <summary>
        /// delete metoda podla GuidID api/ZP_Union/GuidID
        /// </summary>
        /// <param name="id">GuidID podla </param>
        [ResponseType(typeof(Zp_Union))]
        public IHttpActionResult DeleteZp_Union(string id)
        {
            Zp_Union zp_Union = db.Zp_Union.Find(id);
            if (zp_Union == null)
            {
                return NotFound();
            }

            db.Zp_Union.Remove(zp_Union);
            db.SaveChanges();

            return Ok(zp_Union);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool Zp_UnionExists(string id)
        {
            return db.Zp_Union.Count(e => e.GuidID == id) > 0;
        }
    }
}