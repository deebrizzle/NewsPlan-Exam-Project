import React from "react";
import { Box, Grid } from "@mui/material";
import UserContentArticle from "./UserContentArticle";

export default function ContentScheduleCalendarView() {
  return (
    <Box>
      <Grid container spacing={1}>
        <Grid container item spacing={3}>
          <UserContentArticle />
        </Grid>
        <Grid container item spacing={3}>
          <UserContentArticle />
        </Grid>
        <Grid container item spacing={3}>
          <UserContentArticle />
        </Grid>
        <Grid container item spacing={3}>
          <UserContentArticle />
        </Grid>
        <Grid container item spacing={3}>
          <UserContentArticle />
        </Grid>
      </Grid>
    </Box>
  );
}
