import { Grid, Box } from "@mui/material";
import UserContentArticle from "./UserContentArticle";
import React, { useEffect, useState } from "react";
import ReactPaginate from 'react-paginate';

export function UserContentTable ({ articles }) {

  const [currentArticles, setCurrentArticles] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [articleOffset, setArticleOffset] = useState(0);

  useEffect(() => {
    const endOffset = articleOffset + 7;
    setCurrentArticles(Object.entries(articles).slice(articleOffset, endOffset));
    console.log(currentArticles)
    setPageCount(Math.ceil(articles.length / articles));
  }, [articleOffset, articles]);

  const handlePageClick = (event) => {
    const newIndex = (event.selected * articles) % articles.length;
    setArticleOffset(newIndex);
  };

  if (currentArticles === null) {
    return <p>Loading...</p>;
  } else {

  return (

    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 30 }}
    > 
      {currentArticles.map((userNameAndArticles) => {
        return (
          <Grid flexDirection="row" item xs={2} sm={4} md={4}>
            <Box>
              <ReactPaginate 
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={6}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
              />
              <UserContentArticle userNameAndArticles={userNameAndArticles} />

            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
};
}