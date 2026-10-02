import { List, ListItem, ListItemText, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [events, setEvents] = useState<AppEvent[]>([]);

  useEffect(() => {
    axios.get("https://localhost:5001/api/v1/events")
      .then(res => setEvents(res.data));

    return () => {};
  }, []);

  return (
    <>
      <Typography variant="h3">
        Events Hub
      </Typography>
      <List>
        {events.map((event: AppEvent) => (
          <ListItem key={event.id}>
            <ListItemText>{event.title}</ListItemText>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default App;
