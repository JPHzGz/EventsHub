import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link, useNavigate, useParams } from "react-router";
import { useEvents } from "../../../lib/hooks/useEvents";

export default function EventDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { event, isLoading } = useEvents(id);
  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }
  if (!event) {
    return <Typography>Event not found</Typography>;
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
        <Button component={Link} to={`/events/${event.id}`} color="success">
          Edit
        </Button>
        <Button onClick={() => navigate("/events")} color="inherit">
          Cancel
        </Button>
      </CardActions>
    </Card>
  );
}
