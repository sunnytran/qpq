namespace server.Models
{
    public class Prompt
    {
        public int Id { get; set; }
        public string PromptText { get; set; }
        public bool IsUsed { get; set; }

        public Prompt(int Id, string PromptText, bool IsUsed)
        {
            this.Id = Id;
            this.PromptText = PromptText;
            this.IsUsed = IsUsed;
        }
    }
}