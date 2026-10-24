import { Box, Button, Paper, TextField, Typography } from "@mui/material";

type Props = {
  event?: AppEvent;
  closeForm: () => void;
  submitForm: (event: AppEvent) => void;
};

export default function EventForm({ event, closeForm, submitForm }: Props) {
  const handleSubmit = (
    formEvent: React.SubmitEvent<HTMLFormElement>,
  ): void => {
    formEvent.preventDefault();
    const formData = new FormData(formEvent.currentTarget);
    const data: { [key: string]: FormDataEntryValue } = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    if (event) {
      data.id = event.id;
    }
    submitForm(data as unknown as AppEvent);
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
          defaultValue={event?.date}
        />
        <TextField name="city" label="City" defaultValue={event?.city} />
        <TextField name="venue" label="Venue" defaultValue={event?.venue} />
        <Box sx={{ display: "flex", justifyContent: "end", gap: 3 }}>
          <Button onClick={closeForm} color="error">
            Cancel
          </Button>
          <Button type="submit" color="primary">
            Save
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}
