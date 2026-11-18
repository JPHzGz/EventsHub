import { Box, Container, CssBaseline, Typography } from "@mui/material";
import { useState } from "react";
import NavBar from "./NavBar";
import EventDashboard from "../../features/events/dashboard/EventDashboard";
import { useEvents } from "../../lib/hooks/useEvents";

function App() {
  const [selectedEvent, setSelectedEvent] = useState<AppEvent | undefined>(
    undefined,
  );
  const [editMode, setEditMode] = useState(false);
  const { events, isPending } = useEvents();

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

  const handleDeleteEvent = (id: string) => {
    //setEvents(events.filter((ev) => ev.id !== id));
    console.log(id);
  };

  return (
    <Box sx={{ bgcolor: "#f5faf7", minHeight: "100vh", height: "auto" }}>
      <CssBaseline />
      <NavBar openForm={handleOpenForm} />
      <Container maxWidth="xl" sx={{ py: 4 }}>
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
            deleteEvent={handleDeleteEvent}
          />
        )}
      </Container>
    </Box>
  );
}

export default App;
