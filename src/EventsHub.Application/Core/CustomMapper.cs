using System.Collections.Concurrent;
using System.Reflection;

namespace EventsHub.Application.Core;

public class CustomMapper : IMapper
{
    private readonly Dictionary<(Type Source, Type Destination), TypeMap> _typeMaps = new();

    private static readonly ConcurrentDictionary<Type, PropertyInfo[]> _readablePropsCache = new();
    private static readonly ConcurrentDictionary<Type, Dictionary<string, PropertyInfo>> _writablePropsCache = new();

    public CustomMapper(IEnumerable<MappingProfile> profiles)
    {
        foreach (var profile in profiles)
        {
            foreach (var typeMap in profile.TypeMaps)
            {
                _typeMaps[(typeMap.SourceType, typeMap.DestinationType)] = typeMap;
            }
        }
    }

    public void Map<TSource, TDestination>(TSource source, TDestination destination)
    {
        if (source == null || destination == null) return;

        var sourceType = source.GetType();
        var destinationType = destination.GetType();

        // Check if there is a specific TypeMap registered
        _typeMaps.TryGetValue((sourceType, destinationType), out var typeMap);
        if (typeMap == null)
        {
            _typeMaps.TryGetValue((typeof(TSource), typeof(TDestination)), out typeMap);
        }

        var sourceProps = _readablePropsCache.GetOrAdd(
            sourceType,
            t => t.GetProperties(BindingFlags.Public | BindingFlags.Instance).Where(p => p.CanRead).ToArray()
        );

        var destProps = _writablePropsCache.GetOrAdd(
            destinationType,
            t => t.GetProperties(BindingFlags.Public | BindingFlags.Instance)
                  .Where(p => p.CanWrite)
                  .ToDictionary(p => p.Name, StringComparer.OrdinalIgnoreCase)
        );

        foreach (var srcProp in sourceProps)
        {
            if (typeMap != null && typeMap.IgnoredProperties.Contains(srcProp.Name))
            {
                continue;
            }

            if (destProps.TryGetValue(srcProp.Name, out var destProp))
            {
                if (destProp.PropertyType.IsAssignableFrom(srcProp.PropertyType))
                {
                    var value = srcProp.GetValue(source);
                    destProp.SetValue(destination, value);
                }
            }
        }

        if (typeMap != null)
        {
            foreach (var customAction in typeMap.CustomActions)
            {
                customAction(source, destination);
            }
        }
    }

    public TDestination Map<TSource, TDestination>(TSource source)
    {
        if (source == null) return default!;

        var destination = Activator.CreateInstance<TDestination>()
            ?? throw new InvalidOperationException($"Cannot create instance of {typeof(TDestination)}.");

        Map(source, destination);
        return destination;
    }

    public TDestination Map<TDestination>(object source)
    {
        if (source == null) return default!;

        var destination = Activator.CreateInstance<TDestination>()
            ?? throw new InvalidOperationException($"Cannot create instance of {typeof(TDestination)}.");

        Map(source, destination);
        return destination;
    }
}
