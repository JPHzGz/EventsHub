import { Box } from "@mui/material";
import EventCard from "./EventCard";

type Props = {
  events: AppEvent[];
  selectEvent: (id: string) => void;
};

export default function EventList({ events, selectEvent }: Props) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {events.map((event) => (
        <EventCard key={event.id} event={event} selectEvent={selectEvent} />
      ))}
    </Box>
  );
}
