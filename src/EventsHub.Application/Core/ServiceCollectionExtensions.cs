using System.Reflection;
using Microsoft.Extensions.DependencyInjection;

namespace EventsHub.Application.Core;

public static class ServiceCollectionExtensions
{
    public static IServiceCollection AddCustomMapper(this IServiceCollection services, params Assembly[] assemblies)
    {
        if (assemblies == null || assemblies.Length == 0)
        {
            assemblies = [Assembly.GetCallingAssembly()];
        }

        var profileType = typeof(MappingProfile);
        var profiles = assemblies
            .SelectMany(a => a.GetTypes())
            .Where(t => profileType.IsAssignableFrom(t) && !t.IsAbstract && !t.IsInterface)
            .Select(t => (MappingProfile)Activator.CreateInstance(t)!)
            .ToList();

        services.AddSingleton<IMapper>(new CustomMapper(profiles));

        return services;
    }
}
