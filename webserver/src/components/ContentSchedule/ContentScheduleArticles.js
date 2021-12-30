import { Grid } from "@mui/material";
import { SelectSection } from "../SelectFields/SelectSection";
import { SelectSource } from "../SelectFields/SelectSource"
import { SelectDate } from "../SelectFields/SelectDate";
import ArticleTable from "./ArticleTable";
import React, { useEffect } from "react";
import { getFinishedArticles, getUnfinishedArticles } from "../../database/Articles";
import { getIdeas } from "../../database/Ideas";
import {StandardButton} from "../Button.styles";
import { getSections } from "../../database/Sections";
import { ContentContext } from "./ContentScheduleContext";
import { useContext } from "react";

export default function ContentScheduleArticles() {

  const {finishedArticles, setFinishedArticles, unfinishedArticles, setUnfinishedArticles, contentDate, sectionContent, sourceContent} = useContext(ContentContext);

    useEffect(() => {
      getIdeas()
      getSections()
      getFinishedArticles(contentDate, setFinishedArticles)
      getUnfinishedArticles(contentDate, setUnfinishedArticles)

    }, [contentDate, sectionContent, sourceContent]);

  if (finishedArticles === undefined && unfinishedArticles === undefined) {
    return <p>Loading...</p>
  } else 
    return (
      <>
        <Grid container spacing={2}>
            {/* First Line: selectors/date */}
            <Grid item xs={2}> <SelectSource /> </Grid>
            <Grid item xs={2}> <SelectSection /> </Grid>
            <Grid item xs={6}> <StandardButton>Filter</StandardButton></Grid>
            <Grid item xs={2}> <SelectDate/> </Grid>
            {/* Second line: headers */}
            <Grid item xs={6}><h6>Finished Articles</h6></Grid>
            <Grid item xs={6}> <h6>Unfinished Articles</h6></Grid>
            {/* Third line: tables */}
            <Grid item xs={6}> <ArticleTable articles={finishedArticles}/> </Grid>
            <Grid item xs={6}> <ArticleTable articles={unfinishedArticles}/> </Grid>
            <Grid></Grid>
        </Grid>
      </>
    );
}
