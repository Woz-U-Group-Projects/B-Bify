using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HR_Squared.Models;
using Microsoft.AspNetCore.Mvc;

namespace HR_Squared.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GuestsController : Controller
    {
        private readonly HR_SquaredContext _context;

        public GuestsController(HR_SquaredContext context)
        {
            _context = context;
        }
        // GET api/values
        [HttpGet]
        public IActionResult Get()
        {
            return base.Json(_context.TblEmployee);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
