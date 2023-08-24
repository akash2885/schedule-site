import React from "react";
import { createTheme } from "@mui/material/styles";
import { blue, grey } from "@mui/material/colors";
import "@fontsource/poppins"; // Defaults to weight 400

const theme = createTheme({
    palette: {
        primary: {
            main: blue[300],
        },
        secondary: {
            main: grey[200],
        },
    },
    typography: {
        fontFamily: 'Poppins, sans-serif',
    },
});

export default theme;
