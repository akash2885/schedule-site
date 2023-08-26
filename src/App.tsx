import React from 'react';
import {ThemeProvider} from "@mui/material";
import theme from "./components/theme";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/home-page/Home";
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";



function App() {
  return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
            <Route path={'/'} element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
      </LocalizationProvider>
  );
}

export default App;
