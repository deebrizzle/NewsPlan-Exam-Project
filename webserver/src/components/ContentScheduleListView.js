import { Grid } from "@mui/material";
import { SelectSection, SelectSource } from "./SelectFields";
import ArticleTable from "./ArticleTable";
import CalendarPopup from "./CalendarPopup";
import React, { useEffect } from "react";
import { getFinishedArticles, getUnfinishedArticles } from "../database/Articles";
import { getIdeas } from "../database/Ideas";
import {StandardButton} from "./Button.styles";
import { getSections } from "../database/Sections";


export default function ContentScheduleListView() {
  const [finishedArticles, setFinishedArticles] = React.useState();
  const [unfinishedArticles, setUnfinishedArticles] = React.useState();
  const [date, setDate] = React.useState(new Date(2021, 10, 26, 0, 0, 0, 0));
  const [section, setSection] = React.useState();

  const handleCallbackDate = (Date) => {
    setDate(Date);
  };

    //TODO handle callback is causing the input field not to update. If set to handleCallBack = () => {} then it works. 
  function handleCallBackSelection(selectedSection) {
    setSection(selectedSection)
  }

  function articleFilter(parseObjectArray, section) {
    if (section === undefined) {
      return parseObjectArray;
    } else {
      const filtered = parseObjectArray.filter(
        (article) => article.get("idea").get("section").get("name") === section
      );
      return filtered;
    }
  }
    useEffect(() => {
      getIdeas()
      getSections()

      getFinishedArticles(date).then((finishedArticle) => {
        setFinishedArticles(finishedArticle);
        
      });
      getUnfinishedArticles(date).then((unfinishedArticle) => {
        setUnfinishedArticles(unfinishedArticle)

      });

      console.log(section)
    }, [date, section]);

  if (finishedArticles === undefined && unfinishedArticles === undefined) {
    return <p>Loading...</p>
  } else 
    return (
      <>
        <Grid container spacing={2}>
            {/* First Line: selectors/date */}
            <Grid item xs={2}> <SelectSource handleCallBackSelection={handleCallBackSelection}/> </Grid>
            <Grid item xs={2}> <SelectSection handleCallBackSelection={handleCallBackSelection}/> </Grid>
            <Grid item xs={6}> <StandardButton>Filter</StandardButton></Grid>
            <Grid item xs={2}> <CalendarPopup handleCallbackDate={handleCallbackDate} label="Date"/> </Grid>
            {/* Second line: headers */}
            <Grid item xs={6}><h6>Finished Articles</h6></Grid>
            <Grid item xs={6}> <h6>Unfinished Articles</h6></Grid>
            {/* Third line: tables */}
            <Grid item xs={6}> <ArticleTable articles={articleFilter(finishedArticles, section)}/> </Grid>
            <Grid item xs={6}> <ArticleTable articles={articleFilter(unfinishedArticles, section)}/> </Grid>
            <Grid></Grid>
        </Grid>
      </>
    );
}
