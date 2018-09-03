using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using MovieMia.Models;

namespace MovieMia.Models
{
    [BsonIgnoreExtraElements]
    public class DataModel
    {
        [BsonElement("Awards")]
        public AwardModel[] Awards { get; set; }

        [BsonElement("Genres")]
        public string[] Genres { get; set; }

        [BsonElement("OtherNames")]
        public OtherNameModel[] OtherNames { get; set; }

        [BsonElement("Participants")]
        public ParticipantModel[] Participants { get; set; }

        [BsonElement("ReleaseYear")]
        public int ReleaseYear { get; set; }

        [BsonElement("Storylines")]
        public StorylineModel[] Storylines { get; set; }

        [BsonElement("TitleId")]
        public int TitleId { get; set; }

        [BsonElement("TitleName")]
        public string TitleName { get; set; }

        [BsonElement("TitleNameSortable")]
        public string TitleNameSortable { get; set; }

        [BsonId]
        public ObjectId Id { get; set; }

    }
}
