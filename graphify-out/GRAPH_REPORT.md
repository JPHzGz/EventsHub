# Graph Report - EventsHub  (2026-10-01)

## Corpus Check
- 77 files · ~45,244 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 10 file(s) not represented in the graph (top: (none) 7, .css 2, .nswag 1)

## Summary
- 527 nodes · 638 edges · 56 communities (30 shown, 26 thin omitted)
- Extraction: 94% EXTRACTED · 6% INFERRED · 0% AMBIGUOUS · INFERRED: 41 edges (avg confidence: 0.93)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `b45f9ef6`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- What You Must Do When Invoked
- package.json
- EventsHub.UnitTests.csproj
- Event
- EventsHub.Persistence
- .Get
- AppDbContextModelSnapshot
- CustomMapper
- compilerOptions
- compilerOptions
- TypeMap
- devDependencies
- https
- openspec-explore/SKILL.md
- EventsHub.OpenApi
- MappingProfile
- WeatherForecast
- AppDbContext
- Icons Sprite
- .oxlintrc.json
- README.md
- tsconfig.json
- index.d.ts
- Hero Image
- React Logo
- Vite Logo
- ADDED Requirements
- opsx-explore.md
- graphify reference: extra exports and benchmark
- Requirements
- graphify reference: query, path, explain
- graphify reference: add a URL and watch a folder
- graphify reference: commit hook and native CLAUDE.md integration
- graphify reference: incremental update and cluster-only
- React + TypeScript + Vite
- graphify reference: GitHub clone and cross-repo merge
- graphify reference: transcribe video and audio
- rules/graphify.md
- extraction-spec.md
- workflows/graphify.md
- MemberConfigurationExpression
- EventsControllerTests
- Proposal
- IMapper

## God Nodes (most connected - your core abstractions)
1. `Event` - 27 edges
2. `compilerOptions` - 18 edges
3. `compilerOptions` - 15 edges
4. `TypeMap` - 13 edges
5. `AppDbContext` - 13 edges
6. `What You Must Do When Invoked` - 12 edges
7. `EventsHub.Persistence` - 11 edges
8. `CustomMapper` - 10 edges
9. `IMapper` - 10 edges
10. `MappingProfile` - 10 edges

## Surprising Connections (you probably didn't know these)
- `2. Mapping Engine Implementation` --references--> `CustomMapper`  [INFERRED]
  openspec/changes/archive/2026-10-01-custom-mapper/design.md → src/EventsHub.Application/Core/CustomMapper.cs
- `What Changes` --references--> `IMapper`  [INFERRED]
  openspec/changes/archive/2026-10-01-custom-mapper/proposal.md → src/EventsHub.Application/Core/IMapper.cs
- `1. Interface and Base Classes` --references--> `IMapper`  [INFERRED]
  openspec/changes/archive/2026-10-01-custom-mapper/design.md → src/EventsHub.Application/Core/IMapper.cs
- `3. Dependency Injection Registration` --references--> `IMapper`  [INFERRED]
  openspec/changes/archive/2026-10-01-custom-mapper/design.md → src/EventsHub.Application/Core/IMapper.cs
- `1. Custom Mapper Engine Core` --references--> `IMapper`  [INFERRED]
  openspec/changes/archive/2026-10-01-custom-mapper/tasks.md → src/EventsHub.Application/Core/IMapper.cs

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Social Media and Community Icons** — web_public_icons_bluesky_icon, web_public_icons_discord_icon, web_public_icons_github_icon, web_public_icons_social_icon, web_public_icons_x_icon [INFERRED 0.85]
- **Bruno Integration Test Infrastructure** — tests_eventshub_integrationtests_opencollection_collection, tests_eventshub_integrationtests_environments_local_environment, tests_eventshub_integrationtests_events_folder_folder, tests_eventshub_integrationtests_weatherforecast_folder_folder [INFERRED 0.95]
- **Events API CRUD Integration Test Suite** — tests_eventshub_integrationtests_events_events_list_200_request, tests_eventshub_integrationtests_events_events_get_200_request, tests_eventshub_integrationtests_events_events_get_404_request, tests_eventshub_integrationtests_events_events_create_200_request, tests_eventshub_integrationtests_events_events_edit_204_request, tests_eventshub_integrationtests_events_events_delete_200_request [INFERRED 0.95]

## Communities (56 total, 26 thin omitted)

### Community 0 - "What You Must Do When Invoked"
Cohesion: 0.08
Nodes (24): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Part A - Structural extraction for code files (+16 more)

### Community 1 - "package.json"
Cohesion: 0.05
Nodes (41): axios, @babel/core, babel-plugin-react-compiler, @emotion/react, @emotion/styled, @fontsource/roboto, @mui/icons-material, @mui/material (+33 more)

### Community 2 - "EventsHub.UnitTests.csproj"
Cohesion: 0.08
Nodes (25): coverlet.collector (6.0.4), MediatR (14.2.0), Microsoft.AspNetCore.Mvc.NewtonsoftJson (10.0.11), Microsoft.AspNetCore.OpenApi (10.0.11), Microsoft.EntityFrameworkCore.Design (10.0.11), Microsoft.EntityFrameworkCore.Sqlite (10.0.11), Microsoft.NET.Test.Sdk (17.14.0), Moq (4.20.72) (+17 more)

### Community 3 - "Event"
Cohesion: 0.06
Nodes (28): BaseApiController, Mediator, EventsController, GetEventDetails, Handler, Query, Id, GetEventList (+20 more)

### Community 4 - "EventsHub.Persistence"
Cohesion: 0.08
Nodes (11): EventsHub.Domain, EventsHub.Persistence.Migrations, EventsHub.Application.Events.Queries, EventsHub.Api.Controllers, EventsHub.Application.Events.Commands, EventsHub.UnitTests, EventsHub.Persistence, EventsHub.UnitTests.Controllers (+3 more)

### Community 5 - ".Get"
Cohesion: 0.29
Nodes (4): Local Test Environment, EventsHub Integration Tests (OpenCollection), WeatherForecast Test Suite Folder, WeatherForecast - List - 200

### Community 8 - "compilerOptions"
Cohesion: 0.10
Nodes (19): compilerOptions, allowArbitraryExtensions, allowImportingTsExtensions, erasableSyntaxOnly, jsx, lib, module, moduleDetection (+11 more)

### Community 9 - "compilerOptions"
Cohesion: 0.12
Nodes (16): compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, lib, module, moduleDetection, noEmit, noFallthroughCasesInSwitch (+8 more)

### Community 10 - "TypeMap"
Cohesion: 0.22
Nodes (6): MappingExpression, TypeMap, CustomActions, DestinationType, IgnoredProperties, SourceType

### Community 11 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, @babel/core, babel-plugin-react-compiler, oxlint, @rolldown/plugin-babel, @types/babel__core, @types/node, @types/react (+5 more)

### Community 12 - "https"
Cohesion: 0.20
Nodes (9): ASPNETCORE_ENVIRONMENT, applicationUrl, commandName, dotnetRunMessages, environmentVariables, launchBrowser, profiles, https (+1 more)

### Community 13 - "openspec-explore/SKILL.md"
Cohesion: 0.17
Nodes (11): Check for context, Ending Discovery, Guardrails, Handling Different Entry Points, OpenSpec Awareness, Planning a Change, The Stance, What You Don't Have To Do (+3 more)

### Community 14 - "EventsHub.OpenApi"
Cohesion: 0.22
Nodes (8): ASPNETCORE_ENVIRONMENT, applicationUrl, commandName, environmentVariables, launchBrowser, profiles, EventsHub.OpenApi, $schema

### Community 15 - "MappingProfile"
Cohesion: 0.19
Nodes (11): 1. Interface and Base Classes, 2. Mapping Engine Implementation, 3. Dependency Injection Registration, Context, Decisions, Design, Goals / Non-Goals, Risks / Trade-offs (+3 more)

### Community 16 - "WeatherForecast"
Cohesion: 0.25
Nodes (6): EventsHub.Api, WeatherForecast, Date, Summary, TemperatureC, TemperatureF

### Community 17 - "AppDbContext"
Cohesion: 0.07
Nodes (16): Command, Event, CreateEvent, Handler, Command, Id, DeleteEvent, Handler (+8 more)

### Community 18 - "Icons Sprite"
Cohesion: 0.33
Nodes (7): Bluesky Icon, Discord Icon, Documentation Icon, GitHub Icon, Social Icon, Icons Sprite, X Icon

### Community 19 - ".oxlintrc.json"
Cohesion: 0.33
Nodes (5): plugins, rules, react/only-export-components, react/rules-of-hooks, $schema

### Community 26 - "ADDED Requirements"
Cohesion: 0.17
Nodes (11): ADDED Requirements, Purpose, Requirement: Custom Mapping Rules Support, Requirement: Mapping Engine Registration, Requirement: Object Mapping, Requirement: Profile-Based Mapping Configuration, Scenario: Configuring a type map, Scenario: Executing a custom property mapping rule (+3 more)

### Community 27 - "opsx-explore.md"
Cohesion: 0.18
Nodes (10): Check for context, Ending Discovery, Guardrails, OpenSpec Awareness, Planning a Change, The Stance, What You Don't Have To Do, What You Might Do (+2 more)

### Community 28 - "graphify reference: extra exports and benchmark"
Cohesion: 0.22
Nodes (8): graphify reference: extra exports and benchmark, Step 6b - Wiki (only if --wiki flag), Step 7 - Neo4j export (only if --neo4j or --neo4j-push flag), Step 7a - FalkorDB export (only if --falkordb or --falkordb-push flag), Step 7b - SVG export (only if --svg flag), Step 7c - GraphML export (only if --graphml flag), Step 7d - MCP server (only if --mcp flag), Step 8 - Token reduction benchmark (only if total_words > 5000)

### Community 29 - "Requirements"
Cohesion: 0.17
Nodes (11): custom-mapper Specification, Purpose, Requirement: Custom Mapping Rules Support, Requirement: Mapping Engine Registration, Requirement: Object Mapping, Requirement: Profile-Based Mapping Configuration, Requirements, Scenario: Configuring a type map (+3 more)

### Community 30 - "graphify reference: query, path, explain"
Cohesion: 0.33
Nodes (5): For /graphify explain, For /graphify path, graphify reference: query, path, explain, Step 0 — Constrained query expansion (REQUIRED before traversal), Step 1 — Traversal

### Community 31 - "graphify reference: add a URL and watch a folder"
Cohesion: 0.50
Nodes (3): For /graphify add, For --watch, graphify reference: add a URL and watch a folder

### Community 32 - "graphify reference: commit hook and native CLAUDE.md integration"
Cohesion: 0.50
Nodes (3): For git commit hook, For native CLAUDE.md integration, graphify reference: commit hook and native CLAUDE.md integration

### Community 33 - "graphify reference: incremental update and cluster-only"
Cohesion: 0.50
Nodes (3): For --cluster-only, For --update (incremental re-extraction), graphify reference: incremental update and cluster-only

### Community 34 - "React + TypeScript + Vite"
Cohesion: 0.50
Nodes (3): Expanding the Oxlint configuration, React Compiler, React + TypeScript + Vite

### Community 51 - "MemberConfigurationExpression"
Cohesion: 0.28
Nodes (3): MemberConfigurationExpression, CustomResolver, IsIgnored

### Community 53 - "Proposal"
Cohesion: 0.25
Nodes (7): Capabilities, Impact, Modified Capabilities, New Capabilities, Proposal, What Changes, Why

### Community 54 - "IMapper"
Cohesion: 0.29
Nodes (6): 1. Custom Mapper Engine Core, 2. Refactoring Existing Code, 3. Verification, Tasks, IMapper, EditEvent

## Knowledge Gaps
- **235 isolated node(s):** `Mediator`, `net10.0`, `Microsoft.AspNetCore.OpenApi (10.0.11)`, `Microsoft.EntityFrameworkCore.Design (10.0.11)`, `Microsoft.NET.Sdk.Web` (+230 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 316 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **26 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Event` connect `Event` to `AppDbContext`?**
  _High betweenness centrality (0.057) - this node is a cross-community bridge._
- **Why does `AppDbContext` connect `AppDbContext` to `Event`, `EventsHub.Persistence`?**
  _High betweenness centrality (0.047) - this node is a cross-community bridge._
- **Why does `IMapper` connect `IMapper` to `AppDbContext`, `CustomMapper`, `Proposal`, `MappingProfile`?**
  _High betweenness centrality (0.033) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `Event` (e.g. with `Events - Create - 200` and `Events - Edit - 204`) actually correct?**
  _`Event` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `Mediator`, `net10.0`, `Microsoft.AspNetCore.OpenApi (10.0.11)` to the rest of the system?**
  _235 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `What You Must Do When Invoked` be split into smaller, more focused modules?**
  _Cohesion score 0.08 - nodes in this community are weakly interconnected._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.05217391304347826 - nodes in this community are weakly interconnected._