import React from "react";
import { Box, Typography } from "@mui/material";


function UserContentArticle () {
    return (
        <Box sx={{flexGrow: 1}}>
            <Typography variant="h6" component="h2" align="center"> Initials </Typography>
            <Grid>
                <Grid item xs={4}>Article</Grid>
                <Grid item xs={4}>Article</Grid>
                <Grid item xs={4}>Article</Grid>
                <Grid item xs={4}>Article</Grid>
                <Grid item xs={4}>Article</Grid>
            </Grid>
        </Box>
    );
}

export default UserContentArticle;