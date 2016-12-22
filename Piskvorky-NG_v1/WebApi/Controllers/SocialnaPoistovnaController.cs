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
    /// controller pre data socialnej poistovne
    /// </summary>
    public class SocialnaPoistovnaController : ApiController
    {
        private DlzniciEntities db = new DlzniciEntities();

        /// <summary>
        /// get metoda na vsetky data api/KurzovyListok
        /// </summary>
        public IQueryable<Socialna_Poistovna> GetSocialna_Poistovna()
        {
            return db.Socialna_Poistovna;
        }

        /// <summary>
        /// get metoda na data podla guidID api/SocialnaPoistovna/GuidID
        /// </summary>
        /// <param name="id">GuidID v Dbo</param>
        [ResponseType(typeof(Socialna_Poistovna))]
        public IHttpActionResult GetSocialna_Poistovna(int id)
        {
            Socialna_Poistovna socialna_Poistovna = db.Socialna_Poistovna.Find(id);
            if (socialna_Poistovna == null)
            {
                return NotFound();
            }

            return Ok(socialna_Poistovna);
        }

        /// <summary>
        /// put metoda na vkladanie dat api/SocialnaPoistovna
        /// </summary>
        /// <param name="id">GuidID v Dbo</param>
        /// <param name="socialna_Poistovna">model</param>
        [ResponseType(typeof(void))]
        public IHttpActionResult PutSocialna_Poistovna(int id, Socialna_Poistovna socialna_Poistovna)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != socialna_Poistovna.Id)
            {
                return BadRequest();
            }

            db.Entry(socialna_Poistovna).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Socialna_PoistovnaExists(id))
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
        /// post metoda api/SocialnaPoistovna
        /// </summary>
        /// <param name="socialna_Poistovna">model</param>
        [ResponseType(typeof(Socialna_Poistovna))]
        public IHttpActionResult PostSocialna_Poistovna(Socialna_Poistovna socialna_Poistovna)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Socialna_Poistovna.Add(socialna_Poistovna);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (Socialna_PoistovnaExists(socialna_Poistovna.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = socialna_Poistovna.Id }, socialna_Poistovna);
        }

        /// <summary>
        /// post metoda api/SocialnaPoistovna
        /// </summary>
        /// <param name="id">model</param>
        [ResponseType(typeof(Socialna_Poistovna))]
        public IHttpActionResult DeleteSocialna_Poistovna(int id)
        {
            Socialna_Poistovna socialna_Poistovna = db.Socialna_Poistovna.Find(id);
            if (socialna_Poistovna == null)
            {
                return NotFound();
            }

            db.Socialna_Poistovna.Remove(socialna_Poistovna);
            db.SaveChanges();

            return Ok(socialna_Poistovna);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool Socialna_PoistovnaExists(int id)
        {
            return db.Socialna_Poistovna.Count(e => e.Id == id) > 0;
        }
    }
}