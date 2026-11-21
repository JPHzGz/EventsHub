import { CalendarToday, Info, Place } from "@mui/icons-material";
import { Divider, Grid, Paper, Typography } from "@mui/material";

type Props = {
  event: AppEvent;
};

export default function EventDetailsInfo({ event }: Props) {
  return (
    <Paper sx={{ mb: 2 }}>
      <Grid container sx={{ alignItems: "center", pl: 2, py: 1 }}>
        <Grid size={1}>
          <Info color="info" fontSize="large" />
        </Grid>
        <Grid size={11}>
          <Typography>{event.description}</Typography>
        </Grid>
      </Grid>
      <Divider />
      <Grid container sx={{ alignItems: "center", pl: 2, py: 1 }}>
        <Grid size={1}>
          <CalendarToday color="info" fontSize="large" />
        </Grid>
        <Grid size={11}>
          <Typography>{event.date}</Typography>
        </Grid>
      </Grid>
      <Divider />

      <Grid container sx={{ alignItems: "center", pl: 2, py: 1 }}>
        <Grid size={1}>
          <Place color="info" fontSize="large" />
        </Grid>
        <Grid size={11}>
          <Typography>
            {event.city}, {event.venue}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}
