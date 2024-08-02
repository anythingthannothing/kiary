using Microsoft.EntityFrameworkCore;
using Todo.Infrastructure.Entities;

namespace Todo.Infrastructure.DbContexts;

public class TodoDbContext(DbContextOptions<TodoDbContext> options) : DbContext(options)
{
    public virtual DbSet<TodoEntity> Todo { get; set; }
}

public class TodoDbInitializer
{
    public static void InitDb(WebApplication app)
    {
        using var scope = app.Services.CreateScope();

        try
        {
            scope.ServiceProvider.GetService<TodoDbContext>()?.Todo.FirstOrDefault();
        }
        catch (Exception exception)
        {
            Console.WriteLine($"Todo DB 연결 실패\n{exception.Message}");
            throw new Exception(exception.Message);
        }

        Console.WriteLine("Todo DB 연결 성공");
    }
}
