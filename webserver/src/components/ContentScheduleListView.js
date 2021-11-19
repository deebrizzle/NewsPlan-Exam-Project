import { Grid } from "@mui/material"
import { SelectSection, SelectSource } from "./SelectFields"
import ArticleTable from "./ArticleTable"
import CalendarPopup from "./CalendarPopup"
import React from "react";
import Parse from "parse";
import { useEffect } from "react";

//get data from database here and filter if by Finished and unfinished, 
//then pass it on to the article table component. 
async function getFinishedArticles() {
    const Articles = Parse.Object.extend("Articles");
    const query = new Parse.Query(Articles);
    query.include("responsible")
    query.equalTo("status", "F");
    return await query.find();
  }

  async function getUnfinishedArticles() {
    const Articles = Parse.Object.extend("Articles");
    const query = new Parse.Query(Articles);
    query.include("responsible")
    query.notEqualTo("status", "F");
    return await query.find();
  }

export default function ContentScheduleListView() {
    const [finishedArticles, setFinishedArticles] = React.useState();
    const [unfinishedArticles, setUnfinishedArticles] = React.useState();

    useEffect(() => {
      getFinishedArticles().then((article) => {
        setFinishedArticles(article);

        getUnfinishedArticles().then((article) => {
            setUnfinishedArticles(article)
        })
      });
    }, []);

  
    if (finishedArticles === undefined) {
      return <p>Loading...</p>;
    } else 

    return(
        <>
        <Grid container spacing={2}>
        {/* First Line */}
            <Grid item xs={2}> <SelectSource/> </Grid>
            <Grid item xs={2}> <SelectSection/> </Grid>
            <Grid item xs={6}></Grid>
            <Grid item xs={2} justifyContent="left"> <CalendarPopup/> </Grid>
            {/* Second line: headers */}
            <Grid item xs={6}><h6>Finished Articles</h6></Grid>
            <Grid item xs={6}> <h6>Unfinished Articles</h6></Grid>
            {/* Third line: tables */}
            <Grid item xs={6}> <ArticleTable articles={finishedArticles}/> </Grid>
            <Grid item xs={6}> <ArticleTable articles={unfinishedArticles}/> </Grid>

            {/* Testing - 4th line*/}
            <Grid></Grid>
        </Grid>
        </>
    )
}