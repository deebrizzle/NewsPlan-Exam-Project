import React from "react";
import { Box, Typography, Grid} from "@mui/material";
import { Item } from "./EmployeeArticles.styles";

//TODO Use map somewhere to create each box for every article. Currently only grabbing the first article of each user's articles.

function ArticleBox({ articles }) {
  return (
    <>
      {articles.map((article) => {
         return (
          <Item value={article.status} key={article.objectId} sx={{ width: 350, p: 2, flexGrow: 4 }}>
            {article.headline}
          </Item>
        );
        })}
    </>
  );
}

// Index 0 in the array refers to user. Index 1 is the array containing all the articles related to the user.
export default function EmployeeArticles ({ userNameAndArticles }) {
  return (
    <Box>
      <Typography variant="h6" component="h2" align="center">
        {userNameAndArticles[0]}
      </Typography>
      <Grid container spacing = {2} >
          <ArticleBox articles={userNameAndArticles[1]} />
      </Grid>
    </Box>
  );
}
