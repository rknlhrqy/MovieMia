using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Query;
using MongoDB.Bson;
using MongoDB.Driver;
using MovieMia.Models;

namespace MovieMia.Controllers
{
    [Serializable]
    public class MovieTitleModel
    {
        public string movieTitle { get; set; }
    }
    public class MovieController : Controller
    {
        private MongoDBContext dbContext;

        private IMongoCollection<DataModel> movieCollection;

        public MovieController()
        {
            dbContext = new MongoDBContext();
            movieCollection = dbContext.database.GetCollection<DataModel>("Titles");
        }

        // GET: Movie
        public ActionResult Index()
        {
            List<DataModel> movies = movieCollection.AsQueryable<DataModel>().ToList();
            return View(movies);
        }

        // GET: Movie/Details/5
        /*
        public ActionResult Details(string id)
        {
            ObjectId movieId = new ObjectId(id);
            var movie = movieCollection.AsQueryable<DataModel>().SingleOrDefault(x => x.Id == movieId);
            return View(movie);
        }
        */

        // GET: Movie/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Movie/List
        [HttpPost]
        /* [ValidateAntiForgeryToken]*/
        //public ActionResult List(IFormCollection collection)
        public JsonResult List(IFormCollection collection)
        { 
            try
            {       
                string movieTitle = collection["movieTitle"];
                Console.WriteLine(movieTitle);

                var movie = movieCollection.AsQueryable<DataModel>().SingleOrDefault(x => x.TitleName == movieTitle);
                Console.WriteLine(movie);
                return Json(movie);
            }
            catch
            {
                return Json(null);
            }
        }

        // POST: Movie/Create
        [HttpPost]
        /*[ValidateAntiForgeryToken]*/
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: Movie/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: Movie/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: Movie/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: Movie/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}