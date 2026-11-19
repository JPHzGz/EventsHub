import { Box, Typography } from "@mui/material";
import EventCard from "./EventCard";
import { useEvents } from "../../../lib/hooks/useEvents";

export default function EventList() {
  const { events, isPending } = useEvents();
  if (!events || isPending) {
    return <Typography>Loading...</Typography>;
  }
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </Box>
  );
}
