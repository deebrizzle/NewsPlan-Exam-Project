import { Grid } from "@mui/material";
import { SelectSection } from "../SelectFields/SelectSection";
import { SelectSource } from "../SelectFields/SelectSource"
import { SelectDate } from "../SelectFields/SelectDate";
import ArticleTable from "../Tables/ArticleTable";
import React, { useEffect, useContext, useState} from "react";
import { getFinishedArticles, getUnfinishedArticles } from "../../database/Articles";
import { getIdeas } from "../../database/Ideas";
import {StandardButton} from "../Button.styles";
import { getSections } from "../../database/Sections";
import Loading from "../Loading";
import { ModalContext } from "../ModalContext";

export default function ContentScheduleArticles() {
  const [finishedArticles, setFinishedArticles] = useState();
  const [unfinishedArticles, setUnfinishedArticles] = useState();
  const {setSection, section, setIdeaSource, date, ideaSource} = useContext(ModalContext);

    useEffect(() => {
      getIdeas()
      getSections()
      getFinishedArticles(date, setFinishedArticles)
      getUnfinishedArticles(date, setUnfinishedArticles)
      //for cloud function:
    }, [date, section, ideaSource]);

    const handleReset = () => {
      setSection("")
      setIdeaSource("")
    };

  if (finishedArticles === undefined || unfinishedArticles === undefined ) {
    return <Loading/>
  } else 
    return (
      <>
        <Grid container spacing={2}>
            {/* First Line: selectors/date */}
            <Grid item xs={2}> <SelectSource label="Source" /> </Grid>
            <Grid item xs={2}> <SelectSection /> </Grid>
            <Grid item xs={6}> <StandardButton onClick={handleReset}>Reset</StandardButton></Grid>
            <Grid item xs={2}> <SelectDate/> </Grid>
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
