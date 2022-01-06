import { Grid } from "@mui/material";
import { SelectSection } from "../SelectFields/SelectSection";
import { SelectSource } from "../SelectFields/SelectSource"
import { SelectDate } from "../SelectFields/SelectDate";
import ArticleTable from "../Tables/ArticleTable";
import React, { useEffect, useContext, useState} from "react";
import { getFinishedArticles, getUnfinishedArticles } from "../../database/articles";
import { getIdeas } from "../../database/ideas";
import {StandardButton} from "../Button.styles";
import { getSections } from "../../database/sections";
import Loading from "../Loading";
import {FieldContext} from "../FieldContext"
import GridSpacer from "../Gridspacer";

export default function ContentScheduleArticles() {
  const [finishedArticles, setFinishedArticles] = useState();
  const [unfinishedArticles, setUnfinishedArticles] = useState();
  const {section, date, ideaSource, resetContext} = useContext(FieldContext);

    useEffect(() => {
      getIdeas()
      getSections()
      getFinishedArticles(date, setFinishedArticles)
      getUnfinishedArticles(date, setUnfinishedArticles)
    }, [date, section, ideaSource]);

  if (finishedArticles === undefined || unfinishedArticles === undefined ) {
    return <Loading/>
  } else 
    return (
      <>
        <Grid container spacing={2}>
            {/* First Line: selectors/date */}
            <Grid item xs={2}> <SelectDate/> </Grid>
            <Grid item xs={2}> <SelectSection /> </Grid>
            <GridSpacer spacing={8} />
            <Grid item xs={4}> <SelectSource label="Source" /> </Grid>
            <Grid item xs={6}> <StandardButton onClick={resetContext}>Reset</StandardButton></Grid>
            {/* Second line: headers */}
            <Grid item xs={6}><h6>Finished Articles</h6></Grid>
            <Grid item xs={6}> <h6>Unfinished Articles</h6></Grid>
            {/* Third line: tables */}
            <Grid item xs={6}> <ArticleTable articles={finishedArticles}/> </Grid>
            <Grid item xs={6}> <ArticleTable articles={unfinishedArticles}/> </Grid>
        </Grid>
      </>
    );
}
