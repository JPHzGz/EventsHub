import { Box } from "@mui/material";
import EventCard from "./EventCard";

type Props = {
  events: AppEvent[];
};

export default function EventList({ events }: Props) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </Box>
  );
}
