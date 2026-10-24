using EventsHub.Api.Controllers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EventsHub.UnitTests.Controllers
{
    [TestFixture]
    public class EventsControllerTests
    {
        private EventsController _eventsController;

        [SetUp]
        public void Setup()
        {
            _eventsController = new EventsController(GlobalTestSetup.AppDbContext);
        }

        [Test]
        public async Task GetEventsAsync_WhenEventsExists_ReturnsAllEvents()
        {
            var expectedCount = await GlobalTestSetup.AppDbContext.Events.CountAsync();
            
            var result = await _eventsController.GetEventsAsync();
            
            Assert.That(result.Value, Is.Not.Null);
            Assert.That(result.Value, Has.Count.EqualTo(expectedCount));
        }

        [Test]
        public async Task GetEventByIdAsync_WhenEventExists_ReturnsMatchingEvent()
        {
            var existing = await GlobalTestSetup.AppDbContext.Events.FirstAsync();
            
            var result = await _eventsController.GetEventByIdAsync(existing.Id);
            
            Assert.That(result.Value, Is.Not.Null);
            Assert.Multiple(() =>
            {
                Assert.That(result.Value.Id, Is.EqualTo(existing.Id));
                Assert.That(result.Value.Title, Is.EqualTo(existing.Title));
            });
        }

        [Test]
        public async Task GetEventByIdAsync_WhenEventDoesNotExist_ReturnsNotFound()
        {
            var nonExistant = Guid.NewGuid().ToString();
            
            var result = await _eventsController.GetEventByIdAsync(nonExistant);
            
            Assert.That(result.Result, Is.InstanceOf<NotFoundObjectResult>());

            var notFoundResult = (NotFoundObjectResult)result.Result;

            Assert.Multiple(() =>
            {
                Assert.That(notFoundResult.Value, Is.EqualTo("The event was not found"));
                Assert.That(notFoundResult.StatusCode, Is.EqualTo(404));
            });
        }
    }
}