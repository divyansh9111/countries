import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { ModeState } from "./context/ThemeProvider";
export default function ButtonAppBar() {
  const { mode, setMode } = ModeState();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="primary" position="static">
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Where in the world?
            </Typography>
          </IconButton>
          <Button
            sx={{ paddingLeft:'1rem' }}
            size="lg"
            startIcon={
              mode === "light" ? (
                <DarkModeIcon fontSize="medium" />
              ) : (
                <LightModeIcon fontSize="medium" />
              )
            }
            color="inherit"
            onClick={() => {
              setMode(mode === "dark" ? "light" : "dark");
            }}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
