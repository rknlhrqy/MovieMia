using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace MovieMia.Models
{
    public class StorylineModel
    {

        [BsonElement("Description")]
        public string Description { get; set; }

        [BsonElement("Language")]
        public string Language { get; set; }

        [BsonElement("Type")]
        public string Type { get; set; }
    }
}
