import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Typography,
} from "@mui/material";
import { useEvents } from "../../../lib/hooks/useEvents";

type Props = {
  event: AppEvent;
};

export default function EventCard({ event }: Props) {
  const { deleteEvent } = useEvents();
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{event.title}</Typography>
        <Typography sx={{ color: "text.secondary", mb: 1 }}>
          {event.date}
        </Typography>
        <Typography variant="body2">{event.description}</Typography>
        <Typography variant="subtitle1">{event.venue}</Typography>
      </CardContent>
      <CardActions
        sx={{ display: "flex", justifyContent: "space-between", pb: 2 }}
      >
        <Chip label={event.category} variant="outlined" />
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button
            onClick={() => deleteEvent.mutateAsync(event.id)}
            size="medium"
            variant="outlined"
            color="error"
            loading={deleteEvent.isPending}
          >
            Delete
          </Button>
          <Button onClick={() => {}} size="medium" variant="contained">
            View
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
}
