import {
  Container,
  CssBaseline,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";

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
        <List>
          {events.map((event: AppEvent) => (
            <ListItem key={event.id}>
              <ListItemText>{event.title}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Container>
    </>
  );
}

export default App;
