using Microsoft.EntityFrameworkCore;
using Todo.Infrastructure.DbContexts;

namespace Todo.Application.StartupExtensions;

public static class ConfigureServicesExtension
{
    public static void ConfigureServices(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddControllers();

        services.AddDbContextPool<TodoDbContext>((serviceProvider, options) =>
        {
            options.UseNpgsql(configuration.GetConnectionString("Todo"), builder =>
            {
                builder.EnableRetryOnFailure(10, TimeSpan.FromSeconds(5), null);
            });
        }, 4);

        services.AddHttpLogging(options =>
        {
            options.LoggingFields = Microsoft.AspNetCore.HttpLogging.HttpLoggingFields.RequestProperties |
                                    Microsoft.AspNetCore.HttpLogging.HttpLoggingFields.ResponsePropertiesAndHeaders;
        });
    }
}
