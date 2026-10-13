import { Box, Button, Paper, TextField, Typography } from "@mui/material";

type Props = {
  event?: AppEvent;
  closeForm: () => void;
};

export default function EventForm({ event, closeForm }: Props) {
  return (
    <Paper sx={{ borderRadius: 3, p: 3 }}>
      <Typography variant="h5" gutterBottom color="primary">
        Create event
      </Typography>
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column", gap: 3 }}
      >
        <TextField label="Title" value={event?.title} />
        <TextField label="Description" multiline rows={3} />
        <TextField label="Category" />
        <TextField label="Date" type="date" slotProps={{ inputLabel: { shrink: true } }} />
        <TextField label="City" />
        <TextField label="Venue" />
        <Box sx={{ display: "flex", justifyContent: "end", gap: 3 }}>
          <Button onClick={closeForm} color="error">
            Cancel
          </Button>
          <Button color="success">Save</Button>
        </Box>
      </Box>
    </Paper>
  );
}
