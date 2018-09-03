using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace MovieMia.Models
{
    [BsonIgnoreExtraElements]
    public class ParticipantModel
    {
        [BsonElement("IsKey")]
        public bool IsKey { get; set; }

        [BsonElement("RoleType")]
        public string RoleType { get; set; }

        [BsonElement("IsOnScreen")]
        public bool IsOnScreen { get; set; }

        [BsonElement("ParticipantType")]
        public string ParticipantType { get; set; }

        [BsonElement("Name")]
        public string Name { get; set; }

        [BsonElement("ParticipantId")]
        public int ParticipantId { get; set; }

    }
}
