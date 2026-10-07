import { Grid } from "@mui/material";
import EventList from "./EventList";
import EventDetail from "../details/EventDetail";

type Props = {
  events: AppEvent[];
};

export default function EventDashboard({ events }: Props) {
  return (
    <Grid container spacing={3}>
      <Grid size={7}>
        <EventList events={events} />
      </Grid>
      <Grid size={5}>
        {events[0] && <EventDetail event={events[0]} />}
      </Grid>
    </Grid>
  );
}
