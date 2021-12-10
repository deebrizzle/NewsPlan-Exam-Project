import { Grid } from "@mui/material";
import { SelectSection, SelectSource } from "./SelectFields";
import ArticleTable from "./ArticleTable";
import CalendarPopup from "./CalendarPopup";
import React, { useEffect } from "react";
import { getFinishedArticles, getUnfinishedArticles } from "../database/Articles";
import { getIdeas } from "../database/Ideas";
import {StandardButton} from "./Button.styles";
import { getSections } from "../database/Sections";
import { ContentContext } from "./ContentScheduleContext";
import { useContext } from "react";


export default function ContentScheduleListView() {
  //const [finishedArticles, setFinishedArticles] = React.useState();
  //const [unfinishedArticles, setUnfinishedArticles] = React.useState();
  //const [date, setDate] = React.useState(new Date(2021, 10, 26, 0, 0, 0, 0));
  //const [section, setSection] = React.useState();
  //TODO: make context
  const {finishedArticles, setFinishedArticles, unfinishedArticles, setUnfinishedArticles, contentDate, setContentDate, sectionContent, setSectionContent, source, setSource} = useContext(ContentContext);

  //const handleCallbackDate = (Date) => {
  //  setDate(Date);
  //};

    //TODO handle callback is causing the input field not to update. If set to handleCallBack = () => {} then it works. 
  //function handleCallBackSelection(selectedSection) {
  //  setSection(selectedSection)
  //}


    useEffect(() => {
      getIdeas()
      getSections()

      getFinishedArticles(contentDate).then((finishedArticle) => {
        setFinishedArticles(finishedArticle);
        
      });
      getUnfinishedArticles(contentDate).then((unfinishedArticle) => {
        setUnfinishedArticles(unfinishedArticle)

      });

      console.log(sectionContent)
    }, [contentDate, sectionContent]);

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
            <Grid item xs={2}> <CalendarPopup label="Date"/> </Grid>
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
