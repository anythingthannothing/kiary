namespace Todo.Core.Domains;

public interface ITodoModel
{
    int TodoId { get; set; }
    int UserId { get; set; }
    string Content { get; set; }
    string Priority { get; set; }
    DateOnly Date { get; set; }
    DateTime CreatedAt { get; set; }
    DateTime? CompletedAt { get; set; } 
}