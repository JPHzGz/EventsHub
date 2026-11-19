import { Outlet } from "react-router";
import NavBar from "./NavBar";
import { Box, Container, CssBaseline } from "@mui/material";

function App() {
  return (
    <Box sx={{ bgcolor: "#f5faf7", minHeight: "100vh", height: "auto" }}>
      <CssBaseline />
      <NavBar />
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Outlet />
      </Container>
    </Box>
  );
}

export default App;
