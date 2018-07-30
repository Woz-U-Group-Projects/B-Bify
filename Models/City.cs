using System;
using System.Collections.Generic;

namespace BnBify.Models
{
    public partial class City
    {
        public City()
        {
            Address = new HashSet<Address>();
        }

        public ushort CityId { get; set; }
        public string City1 { get; set; }
        public ushort CountryId { get; set; }
        public DateTime LastUpdate { get; set; }

        public Country Country { get; set; }
        public ICollection<Address> Address { get; set; }
    }
}
