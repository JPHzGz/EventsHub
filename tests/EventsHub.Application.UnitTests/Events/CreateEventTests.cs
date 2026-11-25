using EventsHub.Application.Events.Commands;
using EventsHub.Domain;
using Microsoft.EntityFrameworkCore;

namespace EventsHub.Application.UnitTests.Events;

[TestFixture]
public class CreateEventTests : HandlerTestBase
{
    [Test]
    public async Task Handle_WhenEventIsValid_PersistsEventAndReturnsItsId()
    {
        Event @event = NewEvent(title: "New event");
        var handler = new CreateEvent.Handler(Context);
        var command = new CreateEvent.Command { Event = @event };
        string id = await handler.Handle(command, CancellationToken.None);
        Assert.That(id, Is.EqualTo(@event.Id));
        Event? stored = await Context.Events.AsNoTracking().FirstOrDefaultAsync(e => e.Id == id);
        Assert.That(stored, Is.Not.Null);
        Assert.That(stored!.Title, Is.EqualTo("New event"));
    }

    [Test]
    public async Task Handle_WhenIdAlreadyExists_ThrowsDbUpdateException()
    {
        Event existing = await SeedAsync("Existing");
        var handler = new CreateEvent.Handler(Context);
        var command = new CreateEvent.Command { Event = NewEvent(existing.Id, "Duplicate") };
        Assert.ThrowsAsync<DbUpdateException>(() => handler.Handle(command, CancellationToken.None));
    }
}
