import { Grid } from "@mui/material";
import UserContentArticle from "./UserContentArticle";
import React from "react";

export const UserContentTable = ({ articles }) => {
  return (
    <Grid
    container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 70 }}
    >
      {Object.entries(articles).map((userNameAndArticles) => {
        return (
          <Grid
          flexDirection="row"
          item xs={2} sm={4} md={4}
          >
            <UserContentArticle userNameAndArticles={userNameAndArticles} />
          </Grid>
        );
      })}
    </Grid>
  );
};
