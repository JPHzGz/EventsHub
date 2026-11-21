import { Grid } from "@mui/material";
import EventList from "./EventList";
import EventFilters from "./EventFilters";

export default function EventDashboard() {
  return (
    <Grid container spacing={3}>
      <Grid size={9}>
        <EventList />
      </Grid>
      <Grid size={3}>
        <EventFilters />
      </Grid>
    </Grid>
  );
}
