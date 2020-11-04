using System.Collections.Generic;
using server.Models;

namespace server.Services.PromptService
{
    public interface IPromptService
    {
        List<Prompt> GetPrompts();
        Prompt GetPromptById(int id);
        Prompt GetFirstUnusedPrompt();
    }
}