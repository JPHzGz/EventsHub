using System.Linq.Expressions;
using System.Reflection;

namespace EventsHub.Application.Core;

public class TypeMap
{
    public Type SourceType { get; }
    public Type DestinationType { get; }
    public List<Action<object, object>> CustomActions { get; } = [];
    public HashSet<string> IgnoredProperties { get; } = [];

    public TypeMap(Type sourceType, Type destinationType)
    {
        SourceType = sourceType;
        DestinationType = destinationType;
    }
}

public class MemberConfigurationExpression<TSource, TMember>
{
    internal bool IsIgnored { get; private set; }
    internal Func<TSource, TMember>? CustomResolver { get; private set; }

    public void Ignore()
    {
        IsIgnored = true;
    }

    public void MapFrom(Func<TSource, TMember> mappingFunction)
    {
        CustomResolver = mappingFunction;
    }
}

public class MappingExpression<TSource, TDestination>
{
    private readonly TypeMap _typeMap;

    public MappingExpression(TypeMap typeMap)
    {
        _typeMap = typeMap;
    }

    public MappingExpression<TSource, TDestination> ForMember<TMember>(
        Expression<Func<TDestination, TMember>> destinationMember,
        Action<MemberConfigurationExpression<TSource, TMember>> memberOptions)
    {
        MemberExpression? memberExpr = destinationMember.Body switch
        {
            MemberExpression m => m,
            UnaryExpression { Operand: MemberExpression m } => m,
            _ => null
        };

        if (memberExpr != null)
        {
            var memberName = memberExpr.Member.Name;
            var opt = new MemberConfigurationExpression<TSource, TMember>();
            memberOptions(opt);

            if (opt.IsIgnored)
            {
                _typeMap.IgnoredProperties.Add(memberName);
            }
            else if (opt.CustomResolver != null)
            {
                var resolver = opt.CustomResolver;
                var prop = typeof(TDestination).GetProperty(memberName, BindingFlags.Public | BindingFlags.Instance);
                if (prop != null && prop.CanWrite)
                {
                    _typeMap.CustomActions.Add((src, dest) =>
                    {
                        var val = resolver((TSource)src);
                        prop.SetValue(dest, val);
                    });
                }
            }
        }

        return this;
    }
}

public abstract class MappingProfile
{
    internal List<TypeMap> TypeMaps { get; } = [];

    protected MappingExpression<TSource, TDestination> CreateMap<TSource, TDestination>()
    {
        var typeMap = new TypeMap(typeof(TSource), typeof(TDestination));
        TypeMaps.Add(typeMap);
        return new MappingExpression<TSource, TDestination>(typeMap);
    }
}
