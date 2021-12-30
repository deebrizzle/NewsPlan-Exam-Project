import { Grid, Box } from "@mui/material";
import EmployeeArticles from "./EmployeeArticles";
import React, { useEffect, useState } from "react";
import { PaginationContainer, StyledPagination } from "./ScheduledArticles.styles";

export function PaginatedArticles ({ articles }) {

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
    > 
      {articles.map((userNameAndArticles) => {
        return (
          <Grid key={userNameAndArticles[0]} flexDirection="row" item xs={4} sm={4} md={4} justifyContent="center">
              <EmployeeArticles userNameAndArticles={userNameAndArticles} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export function ScheduledArticles ({ articles, itemsPerPage }) {

  const [currentArticles, setCurrentArticles] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [articleOffset, setArticleOffset] = useState(0);

  useEffect(() => {
    const endOffset = articleOffset + itemsPerPage;
    const arrayOfArticles = Object.entries(articles)
    setCurrentArticles(arrayOfArticles.slice(articleOffset, endOffset));
    setPageCount(Math.ceil(arrayOfArticles.length / itemsPerPage));
  }, [articleOffset, articles, itemsPerPage]);

  const handlePageClick = (event, value) => {
    const newIndex = (value * itemsPerPage) % Object.entries(articles).length;
    setArticleOffset(newIndex);
  };

  if (currentArticles === null) {
    return (
      <Box>
        Loading...
      </Box>
    )
  }

  else {
    return (
        <PaginationContainer>            
          <PaginatedArticles articles = {currentArticles} /> 
          <StyledPagination 
            count={pageCount} 
            variant="outlined"
            onChange={handlePageClick} /> 
        </PaginationContainer>
      );
    };
}