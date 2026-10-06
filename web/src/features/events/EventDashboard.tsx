import { Grid, List, ListItem, ListItemText } from "@mui/material";

type Props = {
  events: AppEvent[];
};

export default function EventDashboard({ events }: Props) {
  return (
    <Grid>
      <Grid size={9}>
        <List>
          {events.map((event: AppEvent) => (
            <ListItem key={event.id}>
              <ListItemText>{event.title}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
}
