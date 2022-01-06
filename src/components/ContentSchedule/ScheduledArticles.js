import { Grid, Box } from "@mui/material";
import EmployeeArticles from "./EmployeeArticles";
import React, { useEffect, useState } from "react";
import { PaginationContainer, StyledPagination } from "./ScheduledArticles.styles";
import Loading from "../Loading";

function PaginatedArticles ({ articles }) {

  return (
    <Grid container spacing={4}> 
      {articles.map((userNameAndArticles) => {
        return (
          <Grid item xs={4} key={userNameAndArticles[0]} >
              <EmployeeArticles userNameAndArticles={userNameAndArticles} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export function ScheduledArticles ({ articles, itemsPerPage }) {

  const [currentArticles, setCurrentArticles] = useState();
  const [pageCount, setPageCount] = useState(0);
  const [articleOffset, setArticleOffset] = useState(0);

  useEffect(() => {
    const endOffset = articleOffset + itemsPerPage;
    const arrayOfArticles = Object.entries(articles).sort();
    setCurrentArticles(arrayOfArticles.slice(articleOffset, endOffset));
    setPageCount(Math.ceil(arrayOfArticles.length / itemsPerPage));
  }, [articleOffset, articles, itemsPerPage]);

  const handlePageClick = (event, value) => {
    const newIndex = ((value-1) * itemsPerPage) % Object.entries(articles).length;
    setArticleOffset(newIndex);
  };

  if (currentArticles === undefined) {
    return (
      <Loading/>
    )
  }

  else {
    return (
        <Grid item xs={12}>
          <PaginatedArticles articles = {currentArticles} />
          <StyledPagination count={pageCount} variant="outlined" onChange={handlePageClick} /> 
        </Grid>
      );
    };
}