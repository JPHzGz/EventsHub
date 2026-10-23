import { Box, Container, CssBaseline } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import EventDashboard from "../../features/events/dashboard/EventDashboard";

function App() {
  const [events, setEvents] = useState<AppEvent[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<AppEvent | undefined>(
    undefined,
  );
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    axios
      .get("https://localhost:5001/api/v1/events")
      .then((res) => setEvents(res.data));

    return () => {};
  }, []);

  const handleSelectEvent = (id: string) => {
    setEditMode(false);
    setSelectedEvent(events.find((ev) => ev.id === id));
  };

  const handleCancelSelectEvent = () => {
    setSelectedEvent(undefined);
  };

  const handleOpenForm = (id?: string) => {
    if (id) {
      handleSelectEvent(id);
    } else {
      handleCancelSelectEvent();
    }
    setEditMode(true);
  };

  const handleCloseForm = () => {
    setEditMode(false);
  };

  const handleSubmitForm = (event: AppEvent) => {
    if (event.id) {
      setSelectedEvent(event);
      setEvents(events.map((ev) => (ev.id === event.id ? event : ev)));
    } else {
      const newEvent = { ...event, id: events.length.toString() };
      setSelectedEvent(newEvent);
      setEvents([...events, newEvent]);
    }
    setEditMode(false);
  };

  const handleDeleteEvent = (id: string) => {
    setEvents(events.filter((ev) => ev.id !== id));
  };

  return (
    <Box sx={{ bgcolor: "#f5faf7" }}>
      <CssBaseline />
      <NavBar openForm={handleOpenForm} />
      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <EventDashboard
          events={events}
          selectEvent={handleSelectEvent}
          cancelSelectEvent={handleCancelSelectEvent}
          selectedEvent={selectedEvent}
          editMode={editMode}
          openForm={handleOpenForm}
          closeForm={handleCloseForm}
          submitForm={handleSubmitForm}
          deleteEvent={handleDeleteEvent}
        />
      </Container>
    </Box>
  );
}

export default App;
