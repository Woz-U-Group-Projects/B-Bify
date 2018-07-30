using System;
using System.Collections.Generic;

namespace BnBify.Models
{
    public partial class Payment
    {
        public ushort PaymentId { get; set; }
        public ushort CustomerId { get; set; }
        public byte StaffId { get; set; }
        public int? RentalId { get; set; }
        public decimal Amount { get; set; }
        public DateTime PaymentDate { get; set; }
        public DateTime? LastUpdate { get; set; }

        public Customer Customer { get; set; }
        public Rental Rental { get; set; }
        public Staff Staff { get; set; }
    }
}
