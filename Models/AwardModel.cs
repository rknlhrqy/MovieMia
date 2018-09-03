using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace MovieMia.Models
{
    public class AwardModel
    {
        [BsonElement("AwardWon")]
        public bool AwardWon { get; set; }

        [BsonElement("AwardYear")]
        public int AwardYear { get; set; }

        [BsonElement("Participants")]
        public string[] Participants { get; set; }

        [BsonElement("Award")]
        public string Award { get; set; }

        [BsonElement("AwardCompany")]
        public string AwardCompany { get; set; }

    }
}
