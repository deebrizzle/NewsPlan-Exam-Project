import React from "react";
import { Box, Typography } from "@mui/material";
import { GridContainer, Item, GridItem } from "./UserContentArticle.styles";

//TODO Use map somewhere to create each box for every article. Currently only grabbing the first article of each user's articles.

function ArticleBox({ articles }) {
  return (
    <>
      {articles.map((article) => {
         return (
          <Item sx={{ p: 1, margin: 'auto', flexGrow: 1}}
          variant="outlined"
          >{article.headline}</Item>
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
      <GridContainer rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <GridItem item xs={8} sm={4} md={4}>
          <ArticleBox articles={userNameAndArticles[1]} />
        </GridItem>
      </GridContainer>
    </Box>
  );
}

export default UserContentArticle;
