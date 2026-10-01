# Design

## Context

The application currently relies on AutoMapper for object mapping, particularly for mapping incoming DTOs or domain entities to existing persistence entities (e.g., in `EditEvent.cs`). To reduce external dependencies and have full control over the mapping logic while retaining a familiar profile-based registration, we are introducing a custom mapper.

## Goals / Non-Goals

**Goals:**
- Replace AutoMapper with a lightweight custom implementation.
- Support updating existing objects (e.g., `mapper.Map(source, destination)`).
- Retain a profile-based configuration model (e.g., `MappingProfiles : MappingProfile`).
- Use Reflection for convention-based mapping (matching property names and types).

**Non-Goals:**
- We do not aim to support complex AutoMapper features such as `ProjectTo` for IQueryables, deep nested object mapping, or complex collection mappings unless immediately required by current profiles.
- We are not writing a high-performance IL-emitted mapper; basic Reflection is sufficient for our current scale.

## Decisions

### 1. Interface and Base Classes
We will introduce:
- `IMapper`: The core interface defining `void Map<TSource, TDestination>(TSource source, TDestination destination)`.
- `MappingProfile`: A base class replacing AutoMapper's `Profile`. It will provide a `CreateMap<TSource, TDestination>()` method.

*Rationale*: This minimizes the refactoring needed in our application code, as `EditEvent` and `MappingProfiles` can remain structurally very similar.

### 2. Mapping Engine Implementation
The `CustomMapper` implementation will:
- Maintain a dictionary of registered type pairs.
- When `Map` is called, it will verify the mapping is registered.
- Iterate over public readable properties of the source.
- Find matching public writable properties on the destination by name.
- If types match, it will copy the value.

*Alternatives Considered*:
- *Source generation*: Faster and strongly typed, but more complex to implement and maintain as a custom solution compared to a simple Reflection-based approach.

### 3. Dependency Injection Registration
We will create an extension method `IServiceCollection.AddCustomMapper(Assembly assembly)` that:
- Scans the provided assembly for types inheriting from `MappingProfile`.
- Instantiates them and collects their mappings.
- Registers `IMapper` as a singleton with the collected configuration.

*Rationale*: This mimics AutoMapper's `AddAutoMapper` for a seamless drop-in replacement in `Program.cs`.

## Risks / Trade-offs

- **Risk**: Performance degradation due to Reflection.
  **Mitigation**: Given the application's scale, the overhead is likely negligible. We can introduce property caching later if mapping becomes a bottleneck.
- **Risk**: Missing advanced mapping features.
  **Mitigation**: We will only implement what is currently used. If complex mappings are needed in the future, we can add configuration overrides in `MappingProfile`.
