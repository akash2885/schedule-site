import React from "react";
import Navbar from "./Navbar";
import Content from "./Content";
import {Box} from "@mui/material";
import {grey} from "@mui/material/colors";

const Home = () => {
    return (
        <React.Fragment>
            <Box sx={{backgroundColor: grey[200], height: '100vh'}}>
            <Navbar/>
            <Content/>
            </Box>
        </React.Fragment>
    )
}

export default Home