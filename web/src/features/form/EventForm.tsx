import { Box, Button, Paper, TextField, Typography } from "@mui/material";

export default function EventForm() {
  return (
    <Paper sx={{ borderRadius: 3, p: 3 }}>
      <Typography variant="h5" gutterBottom color="primary">
        Create event
      </Typography>
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column", gap: 3 }}
      >
        <TextField label="Title"></TextField>
        <TextField label="Description" multiline rows={3}></TextField>
        <TextField label="Category"></TextField>
        <TextField label="Date" type="date"></TextField>
        <TextField label="City"></TextField>
        <TextField label="Venue"></TextField>
        <Box sx={{ display: "flex", justifyContent: "end", gap: 3 }}>
          <Button color="inherit">Cancel</Button>
          <Button color="success">Save</Button>
        </Box>
      </Box>
    </Paper>
  );
}
