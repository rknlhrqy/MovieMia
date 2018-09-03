using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Driver;
using System.Configuration;

namespace MovieMia.Models
{
    public class MongoDBContext
    {
        private MongoClient client;
        public IMongoDatabase database;

        public MongoDBContext()
        {
            client = new MongoClient("mongodb://readonly:turner@ds043348.mongolab.com:43348/dev-challenge");
            database = client.GetDatabase("dev-challenge");
        }

    }
}
