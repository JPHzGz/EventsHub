import { Grid } from "@mui/material";
import EventList from "./EventList";
import EventDetail from "../details/EventDetail";
import EventForm from "../form/EventForm";

type Props = {
  events: AppEvent[];
  selectEvent: (id: string) => void;
  cancelSelectEvent: () => void;
  selectedEvent?: AppEvent;
  editMode: boolean;
  openForm: (id: string) => void;
  closeForm: () => void;
  submitForm: (event: AppEvent) => void;
  deleteEvent: (id: string) => void;
};

export default function EventDashboard({
  events,
  selectEvent,
  cancelSelectEvent,
  selectedEvent,
  editMode,
  openForm,
  closeForm,
  submitForm,
  deleteEvent,
}: Props) {
  return (
    <Grid container spacing={3}>
      <Grid size={7}>
        <EventList
          events={events}
          selectEvent={selectEvent}
          deleteEvent={deleteEvent}
        />
      </Grid>
      <Grid size={5}>
        {selectedEvent && !editMode && (
          <EventDetail
            event={selectedEvent}
            cancel={cancelSelectEvent}
            openForm={openForm}
          />
        )}
        {editMode && (
          <EventForm
            event={selectedEvent}
            closeForm={closeForm}
            submitForm={submitForm}
          />
        )}
      </Grid>
    </Grid>
  );
}
