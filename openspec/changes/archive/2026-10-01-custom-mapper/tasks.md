# Tasks

## 1. Custom Mapper Engine Core

- [x] 1.1 Create `IMapper.cs` in `EventsHub.Application/Core` defining the `void Map<TSource, TDestination>(TSource source, TDestination destination)` signature and verify it compiles.
- [x] 1.2 Create `MappingProfile.cs` base class in `EventsHub.Application/Core` with `CreateMap<TSource, TDestination>()` and verify it compiles.
- [x] 1.3 Implement `CustomMapper.cs` in `EventsHub.Application/Core` that uses Reflection to copy properties between source and destination and verify it builds.
- [x] 1.4 Add `ServiceCollectionExtensions.cs` in `EventsHub.Application/Core` to register profiles and `IMapper` and verify it can be imported in `Program.cs`.

## 2. Refactoring Existing Code

- [x] 2.1 Update `MappingProfiles.cs` to inherit from the new custom `MappingProfile` base class instead of AutoMapper's `Profile` and verify there are no syntax errors.
- [x] 2.2 Update `EditEvent.cs` to remove AutoMapper usings and use the new `IMapper` interface from `EventsHub.Application.Core` and verify it compiles.
- [x] 2.3 Update `Program.cs` to remove `builder.Services.AddAutoMapper` and replace it with `builder.Services.AddCustomMapper(typeof(MappingProfiles).Assembly)` and verify the project builds.
- [x] 2.4 Remove the AutoMapper and AutoMapper.Extensions.Microsoft.DependencyInjection NuGet packages from the project using `dotnet remove package` and verify the project builds cleanly.

## 3. Verification

- [x] 3.1 Run the application (or run tests if any exist) and verify the `EditEvent` command executes without throwing mapping exceptions.
