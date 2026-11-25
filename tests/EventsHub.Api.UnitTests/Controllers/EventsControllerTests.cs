using EventsHub.Api.Controllers;
using EventsHub.Application.Core;
using EventsHub.Application.Events.Queries;
using EventsHub.Domain;
using EventsHub.Persistence;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace EventsHub.Api.UnitTests.Controllers;

[TestFixture]
public class EventsControllerTests
{
    private ServiceProvider _serviceProvider = null!;
    private EventsController _eventsController = null!;
    private readonly List<string> _ownedEventsIds = [];
    private static AppDbContext Db => GlobalTestSetup.AppDbContext;

    [SetUp]
    public void Setup()
    {
        var services = new ServiceCollection();
        services.AddMediatR(opt => opt.RegisterServicesFromAssemblyContaining<GetEventList.Handler>());
        services.AddSingleton(GlobalTestSetup.AppDbContext);
        services.AddSingleton<IMapper>(new CustomMapper([new MappingProfiles()]));
        services.AddLogging();
        _serviceProvider = services.BuildServiceProvider();
        _eventsController = new EventsController
        {
            ControllerContext = new ControllerContext
            {
                HttpContext = new DefaultHttpContext { RequestServices = _serviceProvider }
            }
        };
    }

    [TearDown]
    public async Task TearDownAsync()
    {
        foreach (string id in _ownedEventsIds)
        {
            Event? leftover = await Db.Events.FindAsync(id);
            if (leftover is null)
            {
                continue;
            }

            Db.Events.Remove(leftover);
            await Db.SaveChangesAsync();
        }

        _ownedEventsIds.Clear();
        await _serviceProvider.DisposeAsync();
    }

    [Test]
    public async Task GetEventListAsync_WhenEventsExists_ReturnsAllEvents()
    {
        int expectedCount = await Db.Events.CountAsync();

        ActionResult<IReadOnlyList<Event>> result = await _eventsController.GetEventListAsync();

        Assert.That(result.Value, Is.Not.Null);
        Assert.That(result.Value, Has.Count.EqualTo(expectedCount));
    }

    [Test]
    public async Task GetEventByIdAsync_WhenEventExists_ReturnsMatchingEvent()
    {
        Event existing = await Db.Events.FirstAsync();

        ActionResult<Event> result = await _eventsController.GetEventByIdAsync(existing.Id);

        Assert.That(result.Value, Is.Not.Null);
        Event detail = result.Value!;
        Assert.Multiple(() =>
        {
            Assert.That(detail.Id, Is.EqualTo(existing.Id));
            Assert.That(detail.Title, Is.EqualTo(existing.Title));
        });
    }

    [Test]
    public void GetEventByIdAsync_WhenEventDoesntExist_ThrowsEventNotFound()
    {
        string nonExistent = Guid.NewGuid().ToString();
        Exception ex = Assert.ThrowsAsync<Exception>(() => _eventsController.GetEventByIdAsync(nonExistent));
        Assert.That(ex!.Message, Is.EqualTo("The event was not found"));
    }

    [Test]
    public async Task CreateEventAsync_WhenEventIsValid_ReturnsIdAndPesistsEvent()
    {
        Event newEvent = NewEvent("Controller create test");
        _ownedEventsIds.Add(newEvent.Id);
        ActionResult<string> result = await _eventsController.CreateEventAsync(newEvent);
        Assert.That(result.Value, Is.EqualTo(newEvent.Id));
        Event? stored = await Db.Events.AsNoTracking().FirstOrDefaultAsync(e => e.Id == newEvent.Id);
        Assert.That(stored, Is.Not.Null);
    }

    [Test]
    public async Task EditEventAsync_WhenEventExists_ReturnsNoContentAndUpdatesTitle()
    {
        Event owned = await AddOwnedEventAsync("Before edit");
        Event edited = NewEvent(owned.Id, "After edit");
        ActionResult result = await _eventsController.EditEventAsync(edited);
        Assert.That(result, Is.InstanceOf<NoContentResult>());
        Event stored = await Db.Events.AsNoTracking().FirstAsync(e => e.Id == owned.Id);
        Assert.That(stored.Title, Is.EqualTo("After edit"));
    }

    [Test]
    public void EditEventAsync_WhenEventDoesntExist_ThrowsEventNotFound()
    {
        Event edited = NewEvent(Guid.NewGuid().ToString(), "Ghost");
        Exception ex = Assert.ThrowsAsync<Exception>(() => _eventsController.EditEventAsync(edited));
        Assert.That(ex!.Message, Is.EqualTo("Event not found"));
    }

    [Test]
    public async Task DeleteEventAsync_WhenEventExists_ReturnsOkAndRemovesEvent()
    {
        Event owned = await AddOwnedEventAsync("To delete");
        ActionResult result = await _eventsController.DeleteEventAsync(owned.Id);
        Assert.That(result, Is.InstanceOf<OkResult>());
        bool remaining = await Db.Events.AsNoTracking().AnyAsync(e => e.Id == owned.Id);
        Assert.That(remaining, Is.False);
    }

    [Test]
    public void DeleteEventAsync_WhenEventDoesntExist_ThrowsEventNotFound()
    {
        string nonExistentId = Guid.NewGuid().ToString();
        Exception ex = Assert.ThrowsAsync<Exception>(() => _eventsController.DeleteEventAsync(nonExistentId));
        Assert.That(ex!.Message, Is.EqualTo("Event not found"));
    }

    private async Task<Event> AddOwnedEventAsync(string title)
    {
        Event @event = NewEvent(title: title);
        Db.Events.Add(@event);
        await Db.SaveChangesAsync();
        _ownedEventsIds.Add(@event.Id);
        return @event;
    }

    private static Event NewEvent(string? id = null, string title = "Test event") => new()
    {
        Id = id ?? Guid.NewGuid().ToString(),
        Title = title,
        Description = "Test description",
        Category = "music",
        City = "Test city",
        Venue = "Test venue",
        Date = DateTime.UtcNow.AddDays(7)
    };
}
