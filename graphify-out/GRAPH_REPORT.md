# Graph Report - EventsHub  (2026-09-29)

## Corpus Check
- Corpus is ~16,226 words - fits in a single context window. You may not need a graph.

## Summary
- 384 nodes · 495 edges · 26 communities (21 shown, 5 thin omitted)
- Extraction: 94% EXTRACTED · 6% INFERRED · 0% AMBIGUOUS · INFERRED: 29 edges (avg confidence: 0.92)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Graphify Tooling and Rules
- Frontend UI Dependencies
- .NET Solution & NuGet Packages
- CQRS Commands and Queries
- Backend Architecture & Modules
- REST API Controller Endpoints
- Database Schema Migrations
- DbContext & Request Handlers
- TypeScript App Configuration
- TypeScript Node Configuration
- API Base & Forecast Controllers
- Frontend Dev Dependencies
- API Launch Settings
- Events Controller Unit Tests
- OpenAPI Launch Settings
- Frontend Runtime Dependencies
- Weather Forecast Model
- Test Suite Infrastructure
- Vector Icons Sprite
- Oxlint Linter Configuration
- Project Documentation & Context
- TypeScript Solution Config
- Custom Type Definitions
- Hero Banner Asset
- React Logo Asset
- Vite Logo Asset

## God Nodes (most connected - your core abstractions)
1. `Event` - 27 edges
2. `compilerOptions` - 18 edges
3. `Graphify Skill Specification` - 17 edges
4. `compilerOptions` - 15 edges
5. `AppDbContext` - 13 edges
6. `EventsHub.Persistence` - 11 edges
7. `EventsHub.Domain` - 9 edges
8. `EventsController` - 8 edges
9. `Handler` - 7 edges
10. `Events Test Suite Folder` - 7 edges

## Surprising Connections (you probably didn't know these)
- `Events - Create - 200` --shares_data_with--> `Event`  [INFERRED]
  tests/EventsHub.IntegrationTests/Events/Events - Create - 200.yml → src/EventsHub.Domain/Event.cs
- `Events - Edit - 204` --shares_data_with--> `Event`  [INFERRED]
  tests/EventsHub.IntegrationTests/Events/Events - Edit - 204.yml → src/EventsHub.Domain/Event.cs
- `EventsControllerTests` --references--> `EventsController`  [EXTRACTED]
  tests/EventsHub.UnitTests/Controllers/EventsControllerTests.cs → src/EventsHub.Api/Controllers/EventsController.cs
- `GlobalTestSetup` --references--> `AppDbContext`  [EXTRACTED]
  tests/EventsHub.UnitTests/GlobalTestSetup.cs → src/EventsHub.Persistence/AppDbContext.cs
- `EventsHub Application Project` --conceptually_related_to--> `EventsHub Web Frontend Documentation`  [INFERRED]
  README.md → web/README.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Graphify Core Knowledge Extraction Pipeline** — agents_skills_graphify_skill_detection, agents_skills_graphify_skill_structural_ast, agents_skills_graphify_skill_semantic_subagents, agents_skills_graphify_skill_clustering_analysis [EXTRACTED 1.00]
- **Graphify Continuous Update and Sync Mechanisms** — agents_skills_graphify_references_add_watch_background_watcher, agents_skills_graphify_references_hooks_post_commit_hook, agents_skills_graphify_references_update_incremental_detection [INFERRED 0.85]
- **Web Frontend Modern Toolchain Stack** — web_readme_frontend_doc, web_readme_react_compiler_integration, web_readme_oxlint_configuration [EXTRACTED 1.00]
- **Events API CRUD Integration Test Suite** — tests_eventshub_integrationtests_events_events_list_200_request, tests_eventshub_integrationtests_events_events_get_200_request, tests_eventshub_integrationtests_events_events_get_404_request, tests_eventshub_integrationtests_events_events_create_200_request, tests_eventshub_integrationtests_events_events_edit_204_request, tests_eventshub_integrationtests_events_events_delete_200_request [INFERRED 0.95]
- **Bruno Integration Test Infrastructure** — tests_eventshub_integrationtests_opencollection_collection, tests_eventshub_integrationtests_environments_local_environment, tests_eventshub_integrationtests_events_folder_folder, tests_eventshub_integrationtests_weatherforecast_folder_folder [INFERRED 0.95]
- **Social Media and Community Icons** — web_public_icons_bluesky_icon, web_public_icons_discord_icon, web_public_icons_github_icon, web_public_icons_social_icon, web_public_icons_x_icon [INFERRED 0.85]

## Communities (26 total, 5 thin omitted)

### Community 0 - "Graphify Tooling and Rules"
Cohesion: 0.06
Nodes (38): Graphify Knowledge Graph Rule, Knowledge Graph Workflow Governance, Background File Watcher, Add URL and Watch Folder Reference, Multi-Source URL Ingestion, Graphify Exports and Benchmark Reference, Graph Database Export (Neo4j and FalkorDB), Graphify MCP Server Integration (+30 more)

### Community 1 - "Frontend UI Dependencies"
Cohesion: 0.07
Nodes (33): axios, @babel/core, babel-plugin-react-compiler, @emotion/react, @emotion/styled, @fontsource/roboto, @mui/icons-material, @mui/material (+25 more)

### Community 2 - ".NET Solution & NuGet Packages"
Cohesion: 0.07
Nodes (26): AutoMapper (13.0.1), coverlet.collector (6.0.4), MediatR (14.2.0), Microsoft.AspNetCore.Mvc.NewtonsoftJson (10.0.11), Microsoft.AspNetCore.OpenApi (10.0.11), Microsoft.EntityFrameworkCore.Design (10.0.11), Microsoft.EntityFrameworkCore.Sqlite (10.0.11), Microsoft.NET.Test.Sdk (17.14.0) (+18 more)

### Community 3 - "CQRS Commands and Queries"
Cohesion: 0.08
Nodes (31): IRequest, List, Query, Command, Event, Command, Id, Command (+23 more)

### Community 4 - "Backend Architecture & Modules"
Cohesion: 0.11
Nodes (17): automapper, EventsHub.Domain, EventsHub.Application.Events.Queries, EventsHub.Application.Events.Commands, EventsHub.UnitTests, EventsHub.Persistence, EventsHub.Application.Core, mediatr (+9 more)

### Community 5 - "REST API Controller Endpoints"
Cohesion: 0.12
Nodes (24): ActionResult, ControllerBase, HttpDelete, HttpPost, HttpPut, IMediator, IReadOnlyList, ProducesResponseType (+16 more)

### Community 6 - "Database Schema Migrations"
Cohesion: 0.12
Nodes (15): EventsHub.Persistence.Migrations, microsoft_entityframeworkcore_infrastructure, microsoft_entityframeworkcore_migrations, microsoft_entityframeworkcore_storage_valueconversion, Migration, MigrationBuilder, ModelSnapshot, DateTime (+7 more)

### Community 7 - "DbContext & Request Handlers"
Cohesion: 0.14
Nodes (17): Command, DbContext, DbContextOptions, DbSet, IMapper, IRequestHandler, CancellationToken, Task (+9 more)

### Community 8 - "TypeScript App Configuration"
Cohesion: 0.10
Nodes (19): compilerOptions, allowArbitraryExtensions, allowImportingTsExtensions, erasableSyntaxOnly, jsx, lib, module, moduleDetection (+11 more)

### Community 9 - "TypeScript Node Configuration"
Cohesion: 0.12
Nodes (16): compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, lib, module, moduleDetection, noEmit, noFallthroughCasesInSwitch (+8 more)

### Community 10 - "API Base & Forecast Controllers"
Cohesion: 0.16
Nodes (9): EventsHub.Api.Controllers, EventsHub.UnitTests.Controllers, IEnumerable, microsoft_aspnetcore_mvc, newtonsoft_json_serialization, HttpGet, WeatherForecastController, system_reflection (+1 more)

### Community 11 - "Frontend Dev Dependencies"
Cohesion: 0.15
Nodes (13): devDependencies, @babel/core, babel-plugin-react-compiler, oxlint, @rolldown/plugin-babel, @types/babel__core, @types/node, @types/react (+5 more)

### Community 12 - "API Launch Settings"
Cohesion: 0.20
Nodes (9): ASPNETCORE_ENVIRONMENT, applicationUrl, commandName, dotnetRunMessages, environmentVariables, launchBrowser, profiles, https (+1 more)

### Community 13 - "Events Controller Unit Tests"
Cohesion: 0.33
Nodes (5): NotFoundObjectResult, SetUp, Test, Task, EventsControllerTests

### Community 14 - "OpenAPI Launch Settings"
Cohesion: 0.22
Nodes (8): ASPNETCORE_ENVIRONMENT, applicationUrl, commandName, environmentVariables, launchBrowser, profiles, EventsHub.OpenApi, $schema

### Community 15 - "Frontend Runtime Dependencies"
Cohesion: 0.22
Nodes (9): dependencies, axios, @emotion/react, @emotion/styled, @fontsource/roboto, @mui/icons-material, @mui/material, react (+1 more)

### Community 16 - "Weather Forecast Model"
Cohesion: 0.25
Nodes (7): EventsHub.Api, DateOnly, WeatherForecast, Date, Summary, TemperatureC, TemperatureF

### Community 17 - "Test Suite Infrastructure"
Cohesion: 0.33
Nodes (5): OneTimeSetUp, OneTimeTearDown, Task, GlobalTestSetup, AppDbContext

### Community 18 - "Vector Icons Sprite"
Cohesion: 0.33
Nodes (7): Bluesky Icon, Discord Icon, Documentation Icon, GitHub Icon, Social Icon, Icons Sprite, X Icon

### Community 19 - "Oxlint Linter Configuration"
Cohesion: 0.33
Nodes (5): plugins, rules, react/only-export-components, react/rules-of-hooks, $schema

### Community 20 - "Project Documentation & Context"
Cohesion: 0.40
Nodes (5): EventsHub Application Project, ICI 2026 Academic Coursework Context, EventsHub Web Frontend Documentation, Oxlint Linting System, React Compiler Integration

## Knowledge Gaps
- **170 isolated node(s):** `Mediator`, `net10.0`, `Microsoft.AspNetCore.OpenApi (10.0.11)`, `Microsoft.EntityFrameworkCore.Design (10.0.11)`, `Microsoft.NET.Sdk.Web` (+165 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 215 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Event` connect `CQRS Commands and Queries` to `Backend Architecture & Modules`, `REST API Controller Endpoints`, `DbContext & Request Handlers`?**
  _High betweenness centrality (0.073) - this node is a cross-community bridge._
- **Why does `AppDbContext` connect `DbContext & Request Handlers` to `Test Suite Infrastructure`, `CQRS Commands and Queries`, `Backend Architecture & Modules`?**
  _High betweenness centrality (0.056) - this node is a cross-community bridge._
- **Why does `EventsController` connect `REST API Controller Endpoints` to `Backend Architecture & Modules`, `Events Controller Unit Tests`?**
  _High betweenness centrality (0.027) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `Event` (e.g. with `Events - Create - 200` and `Events - Edit - 204`) actually correct?**
  _`Event` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `Mediator`, `net10.0`, `Microsoft.AspNetCore.OpenApi (10.0.11)` to the rest of the system?**
  _170 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Graphify Tooling and Rules` be split into smaller, more focused modules?**
  _Cohesion score 0.05689900426742532 - nodes in this community are weakly interconnected._
- **Should `Frontend UI Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.06756756756756757 - nodes in this community are weakly interconnected._