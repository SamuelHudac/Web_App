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
    /// controller pre data z danoveho uradu
    /// </summary>
    public class DanovyUradController : ApiController
    {
        private DlzniciEntities db = new DlzniciEntities();

        /// <summary>
        /// get metoda na data api/DanovyUrad
        /// </summary>
        public IQueryable<Danovy_Urad> GetDanovy_Urad()
        {
            return db.Danovy_Urad;
        }

        /// <summary>
        /// get metoda na data podla guidID api/DanovyUrad/GuidID
        /// </summary>
        /// <param name="id">GuidID v Dbo</param>
        [ResponseType(typeof(Danovy_Urad))]
        public IHttpActionResult GetDanovy_Urad(string id)
        {
            Danovy_Urad danovy_Urad = db.Danovy_Urad.Find(id);
            if (danovy_Urad == null)
            {
                return NotFound();
            }

            return Ok(danovy_Urad);
        }

        /// <summary>
        /// put metoda api/DanovyUrad/5
        /// </summary>
        /// <param name="id">Id</param>
        /// <param name="danovy_Urad">model</param>
        [ResponseType(typeof(void))]
        public IHttpActionResult PutDanovy_Urad(string id, Danovy_Urad danovy_Urad)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != danovy_Urad.Id)
            {
                return BadRequest();
            }

            db.Entry(danovy_Urad).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Danovy_UradExists(id))
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
        /// post metoda api/DanovyUrad
        /// </summary>
        /// <param name="danovy_Urad">model</param>
        [ResponseType(typeof(Danovy_Urad))]
        public IHttpActionResult PostDanovy_Urad(Danovy_Urad danovy_Urad)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Danovy_Urad.Add(danovy_Urad);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (Danovy_UradExists(danovy_Urad.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = danovy_Urad.Id }, danovy_Urad);
        }

        /// <summary>
        /// delete metoda api/DanovyUrad/guidID
        /// </summary>
        /// <param name="id">id</param>
        [ResponseType(typeof(Danovy_Urad))]
        public IHttpActionResult DeleteDanovy_Urad(string id)
        {
            Danovy_Urad danovy_Urad = db.Danovy_Urad.Find(id);
            if (danovy_Urad == null)
            {
                return NotFound();
            }

            db.Danovy_Urad.Remove(danovy_Urad);
            db.SaveChanges();

            return Ok(danovy_Urad);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool Danovy_UradExists(string id)
        {
            return db.Danovy_Urad.Count(e => e.Id == id) > 0;
        }
    }
}