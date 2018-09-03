using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace MovieMia.Models
{
    public class OtherNameModel
    {
        [BsonElement("TitleNameLanguage")]
        public string TitleNameLanguage { get; set; }

        [BsonElement("TitleNameType")]
        public string TitleNameType { get; set; }

        [BsonElement("TitleNameSortable")]
        public string TitleNameSortable { get; set; }

        [BsonElement("TitleName")]
        public string TitleName { get; set; }

    }
}
