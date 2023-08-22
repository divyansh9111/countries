import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import { ThemeProvider, createTheme } from '@mui/material/styles'
import {  CssBaseline } from "@mui/material";
import { ModeState } from "./context/ThemeProvider";
import DetailPage from "./DetailPage";

function App() {
  const {mode}=ModeState();
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
  
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country_detail/:id" element={<DetailPage/>} />
        </Routes>
      </ThemeProvider>
  );
}

export default App;
