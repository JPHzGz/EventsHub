using EventsHub.Application.Events.Queries;
using EventsHub.Domain;

namespace EventsHub.Application.UnitTests.Events;

[TestFixture]
public class GetEventListTests : HandlerTestBase
{
    [Test]
    public async Task Handle_WhenNoEventsExist_ReturnsEmptyList()
    {
        var handler = new GetEventList.Handler(Context);
        var query = new GetEventList.Query();
        List<Event> result = await handler.Handle(query, CancellationToken.None);
        Assert.That(result, Is.Empty);
    }

    [Test]
    public async Task Handle_WhenEventsExist_ReturnsAllOfThem()
    {
        await SeedAsync("First");
        await SeedAsync("Second");
        await SeedAsync("Third");
        var handler = new GetEventList.Handler(Context);
        var query = new GetEventList.Query();
        List<Event> result = await handler.Handle(query, CancellationToken.None);
        Assert.Multiple(() =>
        {
            Assert.That(result, Has.Count.EqualTo(3));
            Assert.That(result.Select(e => e.Title), Is.EquivalentTo(["First", "Second", "Third"]));
        });
    }

    [Test]
    public async Task Handle_WhenTokenIsAlreadyCancelled_ThrowsOperationCanceledException()
    {
        await SeedAsync("Any");
        var handler = new GetEventList.Handler(Context);
        var query = new GetEventList.Query();
        using var cts = new CancellationTokenSource();
        await cts.CancelAsync();
        Assert.That(
            // ReSharper disable once AccessToDisposedClosure
            async () => await handler.Handle(query, cts.Token),
            Throws.InstanceOf<OperationCanceledException>());
    }
}
