import { Grid } from "@mui/material";
import EventList from "./EventList";

type Props = {
  events: AppEvent[];
};

export default function EventDashboard({ events }: Props) {
  return (
    <Grid>
      <Grid size={9}>
        <EventList events={events} />
      </Grid>
    </Grid>
  );
}
