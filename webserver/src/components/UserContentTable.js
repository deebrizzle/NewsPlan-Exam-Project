import { Grid } from "@mui/material";
import UserContentArticle from "./UserContentArticle";
import React from "react";

export const UserContentTable = ({ articles }) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
    >
      {Object.entries(articles).map((userNameAndArticles) => {
        return (
          <Grid>
            <UserContentArticle userNameAndArticles={userNameAndArticles} />
          </Grid>
        );
      })}
    </Grid>
  );
};
