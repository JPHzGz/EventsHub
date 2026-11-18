import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useEvents } from "../../../lib/hooks/useEvents";

type Props = {
  event?: AppEvent;
  closeForm: () => void;
};

export default function EventForm({ event, closeForm }: Props) {
  const { updateEvent } = useEvents();
  const handleSubmit = async (
    formEvent: React.SubmitEvent<HTMLFormElement>,
  ) => {
    formEvent.preventDefault();
    const formData = new FormData(formEvent.currentTarget);
    const data: { [key: string]: FormDataEntryValue } = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    if (event) {
      data.id = event.id;
      await updateEvent.mutateAsync(data as unknown as AppEvent);
      closeForm();
    }
  };
  return (
    <Paper sx={{ borderRadius: 3, p: 3 }}>
      <Typography variant="h5" gutterBottom color="primary">
        Create event
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 3 }}
      >
        <TextField name="title" label="Title" defaultValue={event?.title} />
        <TextField
          name="description"
          label="Description"
          multiline
          rows={3}
          defaultValue={event?.description}
        />
        <TextField
          name="category"
          label="Category"
          defaultValue={event?.category}
        />
        <TextField
          name="date"
          label="Date"
          type="date"
          slotProps={{ inputLabel: { shrink: true } }}
          defaultValue={
            event?.date
              ? new Date(event.date).toISOString().split("T")[0]
              : new Date().toISOString().split("T")[0]
          }
        />
        <TextField name="city" label="City" defaultValue={event?.city} />
        <TextField name="venue" label="Venue" defaultValue={event?.venue} />
        <Box sx={{ display: "flex", justifyContent: "end", gap: 3 }}>
          <Button onClick={closeForm} color="error">
            Cancel
          </Button>
          <Button type="submit" color="primary" loading={updateEvent.isPending}>
            Save
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}
