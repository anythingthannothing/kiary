namespace Todo.Application.Dtos;

public class CreateTodoRequestDto
{
    public string Name { get; set; }

    public int UserId { get; set; }
}