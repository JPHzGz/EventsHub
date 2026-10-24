using EventsHub.Domain;

namespace EventsHub.Application.Core;

public class MappingProfiles : MappingProfile
{
    public MappingProfiles()
    {
        CreateMap<Event, Event>();
    }
}