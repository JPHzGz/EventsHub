using EventsHub.Application.Events.Queries;
using EventsHub.Domain;

namespace EventsHub.Application.UnitTests.Events;

[TestFixture]
public class GetEventDetailsTests : HandlerTestBase
{
    [Test]
    public async Task Handle_WhenEventExists_ReturnsMatchingEvent()
    {
        Event existing = await SeedAsync("Detail event");
        var handler = new GetEventDetails.Handler(Context);
        var query = new GetEventDetails.Query { Id = existing.Id };
        Event result = await handler.Handle(query, CancellationToken.None);
        Assert.Multiple(() =>
        {
            Assert.That(result.Id, Is.EqualTo(existing.Id));
            Assert.That(result.Title, Is.EqualTo("Detail event"));
        });
    }

    [Test]
    public void Handle_WhenEventDoesNotExist_ThrowsActivityNotFound()
    {
        var handler = new GetEventDetails.Handler(Context);
        var query = new GetEventDetails.Query { Id = Guid.NewGuid().ToString() };
        Exception ex = Assert.ThrowsAsync<Exception>(() => handler.Handle(query, CancellationToken.None));
        Assert.That(ex!.Message, Is.EqualTo("The event was not found"));
    }
}
