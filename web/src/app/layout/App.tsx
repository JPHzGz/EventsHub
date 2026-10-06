import { Container, CssBaseline } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import EventDashboard from "../../features/events/EventDashboard";

function App() {
  const [events, setEvents] = useState<AppEvent[]>([]);

  useEffect(() => {
    axios
      .get("https://localhost:5001/api/v1/events")
      .then((res) => setEvents(res.data));

    return () => {};
  }, []);

  return (
    <>
      <CssBaseline />
      <NavBar />
      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <EventDashboard events={events} />
      </Container>
    </>
  );
}

export default App;
