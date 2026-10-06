import {
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Typography,
} from "@mui/material";

type Props = {
  event: AppEvent;
};

export default function EventCard({ event }: Props) {
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
        <Button size="medium" variant="contained">View</Button>
      </CardActions>
    </Card>
  );
}
