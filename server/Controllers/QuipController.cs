
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using server.Models;
using server.Services.QuipService;

namespace server.Controllers
{
    [ApiController]
    [Route("[controller]")]

    public class QuipController : ControllerBase
    {
        private readonly IQuipService quipService;

        public QuipController(IQuipService quipService)
        {
            this.quipService = quipService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(new { quips = quipService.GetQuips() });
        }

        [HttpGet("{id:int}")]
        public IActionResult GetById(int id)
        {
            return Ok(new { quip = quipService.GetQuipById(id) });
        }

        [HttpGet("{promptId:int}")]
        public IActionResult GetByPromptId(int promptId)
        {
            return Ok(new { quips = quipService.GetQuipsByPromptId(promptId) });
        }
    }
}