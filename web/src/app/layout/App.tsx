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

  useEffect(() => {
    axios
      .get("https://localhost:5001/api/v1/events")
      .then((res) => setEvents(res.data));

    return () => {};
  }, []);

  const handleSelectEvent = (id: string) => {
    setSelectedEvent(events.find((ev) => ev.id === id));
  };

  const handleCancelSelectEvent = () => {
    setSelectedEvent(undefined);
  };

  return (
    <Box sx={{ bgcolor: "#f5faf7" }}>
      <CssBaseline />
      <NavBar />
      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <EventDashboard
          events={events}
          selectEvent={handleSelectEvent}
          cancelSelectEvent={handleCancelSelectEvent}
          selectedEvent={selectedEvent}
        />
      </Container>
    </Box>
  );
}

export default App;
