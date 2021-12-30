import { Grid } from "@mui/material";

const GridSpacer = ({ spacing }) => {
  return spacing ? <Grid item xs={spacing} /> : <Grid />;
};

export default GridSpacer;
