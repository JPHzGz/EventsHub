# Spec Delta

## Purpose

Provides a custom object mapping engine that processes existing mapping profiles to convert objects from source to destination types seamlessly without third-party dependencies.

## ADDED Requirements

### Requirement: Mapping Engine Registration
The system SHALL provide a mechanism to register mapping profiles and the mapper itself in the dependency injection container.

#### Scenario: Registering the mapper and profiles
- **WHEN** the application starts and registers dependencies
- **THEN** the custom mapping engine and all available mapping profiles are successfully registered and ready for injection

### Requirement: Profile-Based Mapping Configuration
The system SHALL allow defining mapping rules between specific source and destination types using mapping profiles.

#### Scenario: Configuring a type map
- **WHEN** a profile configures a mapping from `SourceType` to `DestinationType`
- **THEN** the mapper engine registers this rule for execution during mapping operations

### Requirement: Object Mapping
The system SHALL accurately map properties from a source object to a newly created destination object based on matching property names and configured rules.

#### Scenario: Mapping an object successfully
- **WHEN** the custom mapper is requested to map a `SourceType` instance to a `DestinationType` instance
- **THEN** it creates a `DestinationType` instance with all matching public properties populated from the `SourceType` instance

### Requirement: Custom Mapping Rules Support
The system SHALL allow profiles to define custom mapping rules for specific properties, overriding convention-based mapping.

#### Scenario: Executing a custom property mapping rule
- **WHEN** a profile defines a specific action to map a property
- **THEN** the mapper engine executes that action for the specific property instead of relying solely on name matching
