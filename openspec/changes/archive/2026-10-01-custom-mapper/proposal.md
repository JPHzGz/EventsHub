# Proposal

## Why

We currently rely on AutoMapper for object mapping. Replacing it with a custom mapping solution gives us more control, reduces external dependencies, and allows us to optimize mapping for our specific needs while maintaining compatibility with our current mapping profiles. This makes it easier to build and debug future profiles.

## What Changes

- Create a new custom mapping interface (`IMapper`) and its default implementation.
- Introduce a mechanism to register and process mapping profiles.
- Migrate `MappingProfiles.cs` to the new custom mapper structure instead of AutoMapper's `Profile`.
- Remove the AutoMapper package dependency from the project.
- Update `EditEvent.cs` and any other handlers using AutoMapper to use the new custom mapper.
- Update `Program.cs` to register the new mapper in the dependency injection container.
- **BREAKING**: Internally, AutoMapper specific features will no longer be available and must be handled manually or by the new mapper. No breaking changes to the external API.

## Capabilities

### New Capabilities
- `core/custom-mapper`: Defines the custom object mapping engine that processes existing mapping profiles and maps objects from source to destination types.

### Modified Capabilities

## Impact

- **Application Core**: `src/EventsHub.Application/Core/MappingProfiles.cs` will be refactored.
- **Commands**: `src/EventsHub.Application/Events/Commands/EditEvent.cs` will be updated to inject the new custom mapper.
- **API Setup**: `src/EventsHub.Api/Program.cs` will be updated to remove AutoMapper registration and add the custom mapper.
- **Dependencies**: The AutoMapper NuGet packages will be removed.
