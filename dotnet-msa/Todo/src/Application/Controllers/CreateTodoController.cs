using Microsoft.AspNetCore.Mvc;
using Todo.Application.Dtos;

namespace Todo.Application.Controllers;

public class CreateTodoController : ApiControllerBase
{
    private readonly ILogger<CreateTodoController> _logger;

    public CreateTodoController(ILogger<CreateTodoController> logger)
    {
        _logger = logger;
    }

    [HttpPost("")]
    public async Task Execute([FromBody] CreateTodoRequestDto body)
    {
        return;
    }
}