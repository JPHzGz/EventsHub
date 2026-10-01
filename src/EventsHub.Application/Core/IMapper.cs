namespace EventsHub.Application.Core;

public interface IMapper
{
    void Map<TSource, TDestination>(TSource source, TDestination destination);
    TDestination Map<TDestination>(object source);
    TDestination Map<TSource, TDestination>(TSource source);
}
