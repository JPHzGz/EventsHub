import {
  Avatar,
  Box,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router";

export default function EventDetailsChat() {
  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          bgcolor: "primary.main",
          color: "white",
          padding: 2,
        }}
      >
        <Typography variant="h6">Chat about this event</Typography>
      </Box>
      <Card>
        <CardContent>
          <div>
            <form>
              <TextField
                variant="outlined"
                fullWidth
                multiline
                rows={2}
                placeholder="Enter your comment (ENTER to submit, SHIFT + ENTER for new line)."
              />
            </form>
          </div>
          <Box>
            <Box sx={{ display: "flex", my: 2 }}>
              <Avatar
                src={"/images/user.png"}
                alt={"User image"}
                sx={{ mr: 2 }}
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                  <Typography
                    component={Link}
                    to={`/profiles/user`}
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", textDecoration: "none" }}
                  >
                    User
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    2 hours ago
                  </Typography>
                </Box>
                <Typography sx={{ whiteSpace: "pre-wrap" }}>...</Typography>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}
