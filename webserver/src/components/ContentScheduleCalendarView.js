import React from "react";
import { Box, Grid, Paper } from "@mui/material";
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  

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

export default function ContentScheduleCalendarView() {
  return (
    <Box>
      <Grid container spacing={1}>
        <Grid container item spacing={3}>
          <FormRow/>
        </Grid>
        <Grid container item spacing={3}>
        <FormRow/>
        </Grid>
        <Grid container item spacing={3}>
        <FormRow/>
        </Grid>
        <Grid container item spacing={3}>
        <FormRow/>
        </Grid>
        <Grid container item spacing={3}>
          Article
        </Grid>
      </Grid>
    </Box>
  );
}
