import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

type Props = {
  event: AppEvent;
};

export default function EventDetail({ event }: Props) {
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
        <Button color="primary">Edit</Button>
        <Button color="inherit">CAncel</Button>
      </CardActions>
    </Card>
  );
}
