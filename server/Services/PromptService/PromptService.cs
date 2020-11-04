using System.Collections.Generic;
using System.Linq;
using server.Models;

namespace server.Services.PromptService
{
    public class PromptService : IPromptService
    {
        private static List<Prompt> prompts = new List<Prompt> {
            new Prompt(1, "The worst Thanksgiving Day balloon would be a giant, inflatable __________", false),
            new Prompt(2, "The worst possible choice for the person on the new $20 bill", false)
        };

        public List<Prompt> GetPrompts()
        {
            return prompts;
        }

        public Prompt GetPromptById(int id)
        {
            return prompts.FirstOrDefault(c => c.Id == id);
        }

        public Prompt GetFirstUnusedPrompt()
        {
            return prompts.FirstOrDefault(c => !c.IsUsed);
        }
    }
}