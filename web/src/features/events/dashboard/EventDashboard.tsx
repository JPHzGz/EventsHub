import { Grid } from "@mui/material";
import EventList from "./EventList";

export default function EventDashboard() {
  return (
    <Grid container spacing={3}>
      <Grid size={7}>
        <EventList />
      </Grid>
      <Grid size={5}>...</Grid>
    </Grid>
  );
}
