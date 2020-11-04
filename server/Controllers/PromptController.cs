
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using server.Models;
using server.Services.PromptService;

namespace server.Controllers
{
    [ApiController]
    [Route("[controller]")]

    public class PromptController : ControllerBase
    {
        private readonly IPromptService promptService;

        public PromptController(IPromptService promptService)
        {
            this.promptService = promptService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(new { prompts = promptService.GetPrompts() });
        }

        [HttpGet("{id:int}")]
        public IActionResult GetById(int id)
        {
            return Ok(new { prompt = promptService.GetPromptById(id) });
        }

        [HttpGet("byFirstUnused")]
        public IActionResult GetFirstUnusedPrompt(bool isGettingFirstUnused)
        {
            if (!isGettingFirstUnused)
                return BadRequest();
            return Ok(new { prompt = promptService.GetFirstUnusedPrompt() });
        }
    }
}