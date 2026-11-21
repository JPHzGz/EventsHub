import { Grid, Typography } from "@mui/material";
import { useParams } from "react-router";
import { useEvents } from "../../../lib/hooks/useEvents";
import EventDetailsInfo from "./EventDetailsInfo";
import EventDetailsHeader from "./EventDetailsHeader";
import EventDetailsChat from "./EventDetailsChat";
import EventDetailsSidebar from "./EventDetailsSidebar";

export default function EventDetailsPage() {
  const { id } = useParams();
  const { event, isLoading } = useEvents(id);
  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }
  if (!event) {
    return <Typography>Event not found</Typography>;
  }
  return (
    <Grid container spacing={3}>
      <Grid size={8}>
        <EventDetailsHeader event={event} />
        <EventDetailsInfo event={event} />
        <EventDetailsChat />
      </Grid>
      <Grid size={4}>
        <EventDetailsSidebar />
      </Grid>
    </Grid>
  );
}
