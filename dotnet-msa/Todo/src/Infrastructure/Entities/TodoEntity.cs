using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Todo.Infrastructure.Entities;

[Table("todo")]
public class TodoEntity
{
    [Key]
    [Column("todo_id")]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int TodoId { get; set; }
}