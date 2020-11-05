using System.Collections.Generic;
using server.Models;

namespace server.Services.QuipService
{
    public interface IQuipService
    {
        List<Quip> GetQuips();
        List<Quip> GetQuipsByPromptId(int id);
        Quip GetQuipById(int id);
    }
}