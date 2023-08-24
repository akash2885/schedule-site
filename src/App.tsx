import React from 'react';
import {ThemeProvider} from "@mui/material";
import theme from "./components/theme";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/home-page/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
            <Route path={'/'} element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
