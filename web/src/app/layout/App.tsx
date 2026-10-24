import { Box, Container, CssBaseline, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import NavBar from "./NavBar";
import EventDashboard from "../../features/events/dashboard/EventDashboard";
import { useQuery } from "@tanstack/react-query";

function App() {
  const [selectedEvent, setSelectedEvent] = useState<AppEvent | undefined>(
    undefined,
  );
  const [editMode, setEditMode] = useState(false);

  const { data: events, isPending } = useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const res = await axios.get<AppEvent[]>(
        "https://localhost:5001/api/v1/events",
      );
      return res.data;
    },
  });

  const handleSelectEvent = (id: string) => {
    setEditMode(false);
    setSelectedEvent(events?.find((ev) => ev.id === id));
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
    /* if (event.id) {
      setSelectedEvent(event);
      setEvents(events.map((ev) => (ev.id === event.id ? event : ev)));
    } else {
      const newEvent = { ...event, id: events.length.toString() };
      setSelectedEvent(newEvent);
      setEvents([...events, newEvent]);
    } */
    console.log(event);
    setEditMode(false);
  };

  const handleDeleteEvent = (id: string) => {
    //setEvents(events.filter((ev) => ev.id !== id));
    console.log(id);
  };

  return (
    <Box sx={{ bgcolor: "#f5faf7", height: "100vh" }}>
      <CssBaseline />
      <NavBar openForm={handleOpenForm} />
      <Container maxWidth="xl" sx={{ mt: 4 }}>
        {!events || isPending ? (
          <Typography>Loading...</Typography>
        ) : (
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
        )}
      </Container>
    </Box>
  );
}

export default App;
