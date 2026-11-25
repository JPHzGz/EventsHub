using EventsHub.Application.Core;
using EventsHub.Application.Events.Commands;
using EventsHub.Domain;
using Microsoft.EntityFrameworkCore;

namespace EventsHub.Application.UnitTests.Events;

[TestFixture]
public class EditEventTests : HandlerTestBase
{
    private IMapper _mapper = null!;

    [SetUp]
    public void Setup() => _mapper = new CustomMapper([new MappingProfiles()]);

    [Test]
    public async Task Handle_WhenEventExists_UpdatesStoredValues()
    {
        Event existing = await SeedAsync("Original title");
        Event edited = NewEvent(existing.Id, "Updated title");
        edited.Venue = "Updated venue";
        edited.IsCancelled = true;
        var handler = new EditEvent.Handler(Context, _mapper);
        var command = new EditEvent.Command { Event = edited };
        await handler.Handle(command, CancellationToken.None);
        Event stored = await Context.Events.AsNoTracking().FirstAsync(e => e.Id == existing.Id);
        Assert.Multiple(() =>
        {
            Assert.That(stored.Title, Is.EqualTo("Updated title"));
            Assert.That(stored.Venue, Is.EqualTo("Updated venue"));
            Assert.That(stored.IsCancelled, Is.True);
        });
    }

    [Test]
    public async Task Handle_WhenEventExists_DoesNotCreateANewRow()
    {
        Event existing = await SeedAsync("Original title");
        int countBefore = await Context.Events.CountAsync();
        var handler = new EditEvent.Handler(Context, _mapper);
        var command = new EditEvent.Command { Event = NewEvent(existing.Id, "Updated title") };
        await handler.Handle(command, CancellationToken.None);
        Assert.That(await Context.Events.CountAsync(), Is.EqualTo(countBefore));
    }

    [Test]
    public void Handle_WhenEventDoesNotExist_ThrowsEventNotFound()
    {
        var handler = new EditEvent.Handler(Context, _mapper);
        var command = new EditEvent.Command { Event = NewEvent(Guid.NewGuid().ToString()) };
        Exception ex = Assert.ThrowsAsync<Exception>(() => handler.Handle(command, CancellationToken.None));
        Assert.That(ex!.Message, Is.EqualTo("Event not found"));
    }
}
