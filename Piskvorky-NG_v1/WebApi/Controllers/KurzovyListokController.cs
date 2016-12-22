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
    /// controller pre kurzovy listok
    /// </summary>
    public class KurzovyListokController : ApiController
    {
        private DlzniciEntities db = new DlzniciEntities();

        /// <summary>
        /// get metoda na data api/KurzovyListok
        /// </summary>
        public IQueryable<KurzovyListok> GetKurzovyListoks()
        {
            return db.KurzovyListoks;
        }

        /// <summary>
        /// get metoda na data podla guidID api/KurzovyListok/GuidID
        /// </summary>
        /// <param name="id">GuidID v Dbo</param>
        [ResponseType(typeof(KurzovyListok))]
        public IHttpActionResult GetKurzovyListok(string id)
        {
            KurzovyListok kurzovyListok = db.KurzovyListoks.Find(id);
            if (kurzovyListok == null)
            {
                return NotFound();
            }

            return Ok(kurzovyListok);
        }

        /// <summary>
        /// put metoda pre vkladanie dat api/KurzovyListok/GuidID
        /// </summary>
        /// <param name="id">GuidID v Dbo</param>
        /// <param name="kurzovyListok">model</param>
        [ResponseType(typeof(void))]
        public IHttpActionResult PutKurzovyListok(string id, KurzovyListok kurzovyListok)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != kurzovyListok.GuidID)
            {
                return BadRequest();
            }

            db.Entry(kurzovyListok).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!KurzovyListokExists(id))
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
        /// post metoda api/KurzovyListok
        /// </summary>
        /// <param name="kurzovyListok">model</param>
        [ResponseType(typeof(KurzovyListok))]
        public IHttpActionResult PostKurzovyListok(KurzovyListok kurzovyListok)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.KurzovyListoks.Add(kurzovyListok);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (KurzovyListokExists(kurzovyListok.GuidID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = kurzovyListok.GuidID }, kurzovyListok);
        }

        /// <summary>
        /// post metoda api/KurzovyListok
        /// </summary>
        /// <param name="id">GuidID</param>
        [ResponseType(typeof(KurzovyListok))]
        public IHttpActionResult DeleteKurzovyListok(string id)
        {
            KurzovyListok kurzovyListok = db.KurzovyListoks.Find(id);
            if (kurzovyListok == null)
            {
                return NotFound();
            }

            db.KurzovyListoks.Remove(kurzovyListok);
            db.SaveChanges();

            return Ok(kurzovyListok);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool KurzovyListokExists(string id)
        {
            return db.KurzovyListoks.Count(e => e.GuidID == id) > 0;
        }
    }
}