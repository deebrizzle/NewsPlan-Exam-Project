import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { MyBox, Item } from "./UserContentArticle.styles";


function FormRow() {
  return (
    <React.Fragment>
      <Grid item xs={4}>
        <Item>Article</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>Article</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>Article</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>Article</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>Article</Item>
      </Grid>
    </React.Fragment>
  );
}

function UserContentArticle() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h6" component="h2" align="center">
        {" "}Initials{" "}
      </Typography>
      <Grid container spacing={5}>
        <Grid item xs={4}>
          <FormRow />
        </Grid>
      </Grid>
    </Box>
  );
}

export default UserContentArticle;
