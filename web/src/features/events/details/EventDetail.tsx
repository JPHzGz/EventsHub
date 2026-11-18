import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useEvents } from "../../../lib/hooks/useEvents";

type Props = {
  selectedEvent: AppEvent;
  cancel: () => void;
  openForm: (id: string) => void;
};

export default function EventDetail({
  selectedEvent,
  cancel,
  openForm,
}: Props) {
  const { events } = useEvents();
  const event = events?.find((ev) => ev.id === selectedEvent.id);
  if (!event) {
    return <Typography>Loading...</Typography>;
  }
  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardMedia
        component="img"
        src={`/images/categoryImages/${event.category}.jpg`}
      />
      <CardContent>
        <Typography variant="h5">{event.title}</Typography>
        <Typography variant="subtitle1" sx={{ fontWeight: "light" }}>
          {event.date}
        </Typography>
        <Typography variant="body1">{event.description}</Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => openForm(event.id)} color="success">
          Edit
        </Button>
        <Button onClick={cancel} color="inherit">
          Cancel
        </Button>
      </CardActions>
    </Card>
  );
}
