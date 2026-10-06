import { Group } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Container,
  MenuItem,
  MenuList,
  Toolbar,
  Typography,
} from "@mui/material";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundImage: "linear-gradient(170deg, #01426e, #01703b)" }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <MenuList>
              <MenuItem sx={{ display: "flex", gap: 2 }}>
                <Group fontSize="large" />
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                  Events Hub
                </Typography>
              </MenuItem>
            </MenuList>
            <MenuList disablePadding sx={{ display: "flex" }}>
              <MenuItem sx={{ fontSize: "1.2rem" }}>Events</MenuItem>
              <MenuItem sx={{ fontSize: "1.2rem" }}>About</MenuItem>
              <MenuItem sx={{ fontSize: "1.2rem" }}>Contact</MenuItem>
            </MenuList>
            <Button size="large" variant="contained" color="success">
              Create Event
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
