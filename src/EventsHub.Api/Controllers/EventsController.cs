using EventsHub.Application.Events.Queries;
using EventsHub.Domain;
using Microsoft.AspNetCore.Mvc;

namespace EventsHub.Api.Controllers
{
    public class EventsController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Event>>> GetEventsAsync()
        {
            return await Mediator.Send(new GetEventList.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Event>> GetEventByIdAsync(string id)
        {
            return await Mediator.Send(new GetEventDetails.Query { Id = id });
        }
    }
}