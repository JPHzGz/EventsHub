import { Badge, Box, Button, Card, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router";
import { formatDate } from "../../../lib/utils/util";

type Props = {
  event: AppEvent;
};

export default function EventDetailsHeader({ event }: Props) {
  const isCancelled = false;
  const isHost = true;
  const isGoing = true;
  const isLoading = false;
  return (
    <Card
      sx={{
        position: "relative",
        backgroundColor: "transparent",
        overflow: "hidden",
        mb: 2,
      }}
    >
      {isCancelled && (
        <Badge
          sx={{ position: "absolute", left: 40, top: 20, zIndex: 1000 }}
          color="error"
          badgeContent="Cancelled"
        />
      )}
      <CardMedia
        component="img"
        height="300"
        image={`../images/categoryImages/${event.category}.jpg`}
        alt={`${event.category} image`}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          color: "white",
          padding: 2,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
          background:
            "linear-gradient(to top, rgba(0, 0, 0, 1.0), transparent)",
          boxSizing: "border-box",
        }}
      >
        <Box>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            {event.title}
          </Typography>
          <Typography variant="subtitle1">{formatDate(event.date)}</Typography>
          <Typography variant="subtitle2">
            Hosted by{" "}
            <Link
              to={`/profiles/user`}
              style={{ color: "white", fontWeight: "bold" }}
            >
              User
            </Link>
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          {isHost ? (
            <>
              <Button
                variant="contained"
                color={isCancelled ? "success" : "error"}
                onClick={() => {}}
              >
                {isCancelled ? "Reactivate" : "Cancel"}
              </Button>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to={`/manage/eventId`}
                disabled={isCancelled}
              >
                Edit
              </Button>
            </>
          ) : (
            <Button
              variant="contained"
              color={isGoing ? "primary" : "info"}
              onClick={() => {}}
              disabled={isCancelled || isLoading}
            >
              {isGoing ? "Cancel" : "Join"}
            </Button>
          )}
        </Box>
      </Box>
    </Card>
  );
}
