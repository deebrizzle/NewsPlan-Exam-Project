import React from "react";
import { Box, Grid } from "@mui/material";

export default function ContentScheduleCalendarView() {
    return (
        <Box>
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={4}>Article</Grid>
                <Grid item xs={4}>Article</Grid>
                <Grid item xs={4}>Article</Grid>
                <Grid item xs={4}>Article</Grid>
                <Grid item xs={4}>Article</Grid>
            </Grid>
        </Box>
    );
}