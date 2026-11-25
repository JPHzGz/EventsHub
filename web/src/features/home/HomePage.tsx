import { Group } from "@mui/icons-material";
import { Box, Button, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <Paper
      sx={{
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        gap: 6,
        height: "100vh",
        backgroundImage: "linear-gradient(170deg, #01426e, #01703b)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          alignContent: "center",
          color: "white",
          gap: 3,
        }}
      >
        <Group sx={{ height: 110, width: 110 }} />
        <Typography variant="h1">Events Hub</Typography>
      </Box>
      <Typography variant="h2">Welcome</Typography>
      <Button
        onClick={() => navigate("/events")}
        size="large"
        variant="contained"
        sx={{ height: 80, borderRadius: 4, fontSize: "1.5em" }}
      >
        Let's go
      </Button>
    </Paper>
  );
}
