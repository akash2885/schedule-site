import React from "react";
import { AppBar, Box, Toolbar, styled, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const current = new Date();

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const day = current.getDate();
const month = monthNames[current.getMonth()];

const Navbar = () => {
    return (
        <AppBar sx={{ background: 'linear-gradient(to right bottom, #19cfff, #1898ba)'}}>
            <Toolbar>
                <Typography variant={'h4'}>
                    Schedule
                </Typography>
                <Box sx={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                <Typography variant={'h4'}>
                    {`${month} ${day}`}
                </Typography>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;
