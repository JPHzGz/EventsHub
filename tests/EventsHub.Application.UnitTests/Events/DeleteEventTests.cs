using EventsHub.Application.Events.Commands;
using EventsHub.Domain;
using Microsoft.EntityFrameworkCore;

namespace EventsHub.Application.UnitTests.Events;

[TestFixture]
public class DeleteEventTests : HandlerTestBase
{
    [Test]
    public async Task Handle_WhenEventExists_RemovesItFromDatabase()
    {
        Event existing = await SeedAsync("To delete");
        var handler = new DeleteEvent.Handler(Context);
        var command = new DeleteEvent.Command { Id = existing.Id };
        await handler.Handle(command, CancellationToken.None);
        bool remaining = await Context.Events.AsNoTracking().AnyAsync(e => e.Id == existing.Id);
        Assert.That(remaining, Is.False);
    }

    [Test]
    public void Handle_WhenEventDoesNotExist_ThrowsEventNotFound()
    {
        var handler = new DeleteEvent.Handler(Context);
        var command = new DeleteEvent.Command { Id = Guid.NewGuid().ToString() };
        Exception ex = Assert.ThrowsAsync<Exception>(() => handler.Handle(command, CancellationToken.None));
        Assert.That(ex!.Message, Is.EqualTo("Event not found"));
    }
}
