using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HR_Squared.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;


namespace HR_Squared.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesController : Controller
    {
        private readonly HR_SquaredContext _context;

        public EmployeesController(HR_SquaredContext context)
        {
            _context = context;
        }
        // GET api/values
        [HttpGet]
        public IActionResult Get()
        {
            return base.Json(_context.Employees);
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

        
       
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            // var Result = "";
            
            var Match = _context.Employees.FirstOrDefault(employee => employee.EmployeeId == id);

            // if (Match != null) {
                _context.Employees.Remove(Match);
                _context.SaveChanges();
            //     Result = "Successfully Deleted the Employee";
            // } else {
            //     Result = "Unable to find the given Employee";
            // }
            
            return Ok();
            
        }
        
    }
    
}
