using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Todo.Core.Domains;

namespace Todo.Infrastructure.Entities;

[Table("todo")]
public class TodoEntity : ITodoModel
{
    [Key]
    [Column("todo_id")]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int TodoId { get; set; }

    [Column("user_id")]
    public int UserId { get; set; }
    
    [Column("content")]
    public string Content { get; set; }
    
    [Column("priority")]
    public string Priority { get; set; }
    
    [Column("date")]
    public DateOnly Date { get; set; }
    
    [Column("created_at")]
    public DateTime CreatedAt { get; set; }

    [Column("completed_at")]
    public DateTime? CompletedAt { get; set; }
}