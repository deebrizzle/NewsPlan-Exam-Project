import React from "react";
import { Box, Typography, Grid} from "@mui/material";
import { Item } from "./EmployeeArticles.styles";

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
