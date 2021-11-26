import React from "react";
import { Box, Grid } from "@mui/material";
import UserContentArticle from "./UserContentArticle";

export default function ContentScheduleCalendarView() {
  return (
    <Box>
      <Grid container direction="row" justifyContent="space-evenly" alignItems="center">
        <Grid >
          <UserContentArticle />
        </Grid>
        <Grid>
          <UserContentArticle />
        </Grid>
        <Grid>
          <UserContentArticle />
        </Grid>
        <Grid>
          <UserContentArticle />
        </Grid>
        <Grid>
          <UserContentArticle />
        </Grid>
      </Grid>
    </Box>
  );
}
