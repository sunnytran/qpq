using System.Collections.Generic;
using System.Linq;
using server.Models;

namespace server.Services.QuipService
{
    public class QuipService : IQuipService
    {
        private static List<Quip> quips = new List<Quip> {
            new Quip(1, 1, "Last year's turkey", 10),
            new Quip(2, 1, "Political argument", 2),
            new Quip(3, 2, "Pablo Escobar", 0)
        };

        public Quip GetQuipById(int id)
        {
            return quips.FirstOrDefault(c => c.Id == id);
        }

        public List<Quip> GetQuips()
        {
            return quips;
        }

        public List<Quip> GetQuipsByPromptId(int id)
        {
            return quips.FindAll(c => c.PromptId == id);
        }
    }
}
