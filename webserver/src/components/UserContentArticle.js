import React, { useEffect, useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { Item } from "./UserContentArticle.styles";

//TODO Use map somewhere to create each box for every article. Currently only grabbing the first article of each user's articles.

function ArticleBox({ articles }) {
  return (
    <>
      {articles.map((article) => {
         return (
          <Item>{article.headline}</Item>
        );
        })}
    </>
  );
}

// Index 0 in the array refers to user. Index 1 is the array containing all the articles related to the user.
function UserContentArticle({ userNameAndArticles }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h6" component="h2" align="center">
        {" "}
        {userNameAndArticles[0]}{" "}
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <ArticleBox articles={userNameAndArticles[1]} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default UserContentArticle;
