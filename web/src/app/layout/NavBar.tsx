import { Group } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Container,
  MenuItem,
  MenuList,
  Toolbar,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router";
import MenuItemLink from "../shared/MenuItemLink";

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
              <MenuItem
                component={NavLink}
                to="/"
                sx={{ display: "flex", gap: 2 }}
              >
                <Group fontSize="large" />
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                  Events Hub
                </Typography>
              </MenuItem>
            </MenuList>
            <MenuList disablePadding sx={{ display: "flex" }}>
              <MenuItemLink to="/events">Events</MenuItemLink>
              <MenuItemLink to="/createEvent">Create Event</MenuItemLink>
            </MenuList>
            User Menu
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
