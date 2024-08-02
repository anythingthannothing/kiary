using Todo.Application.StartupExtensions;
using Todo.Infrastructure.DbContexts;

var builder = WebApplication.CreateBuilder(args);

// builder.Services.AddEndpointsApiExplorer();
// builder.Services.AddSwaggerGen();

builder.Services.ConfigureServices(builder.Configuration);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.MapControllers();

TodoDbInitializer.InitDb(app);

app.Run();