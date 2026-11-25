import { Outlet, useLocation } from "react-router";
import NavBar from "./NavBar";
import { Box, Container, CssBaseline } from "@mui/material";
import HomePage from "../../features/home/HomePage";

function App() {
  const location = useLocation();
  return (
    <Box sx={{ bgcolor: "#f5faf7", minHeight: "100vh", height: "auto" }}>
      <CssBaseline />
      {location.pathname === "/" ? (
        <HomePage />
      ) : (
        <>
          <NavBar />
          <Container maxWidth="xl" sx={{ py: 4 }}>
            <Outlet />
          </Container>
        </>
      )}
    </Box>
  );
}

export default App;
