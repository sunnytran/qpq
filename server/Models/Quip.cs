namespace server.Models
{
    public class Quip
    {
        public int Id { get; set; }
        public int PromptId { get; set; }
        public string QuipText { get; set; }
        public int Score { get; set; }

        public Quip(int Id, int PromptId, string QuipText, int Score)
        {
            this.Id = Id;
            this.PromptId = PromptId;
            this.QuipText = QuipText;
            this.Score = Score;
        }
    }
}