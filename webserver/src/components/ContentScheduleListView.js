import { Grid } from "@mui/material"
import { SelectSection, SelectSource } from "./SelectFields"
import ArticleTable from "./ArticleTable"
import CalendarPopup from "./CalendarPopup"
import React from "react";


//get data from database here and filter if by Finished and unfinished, 
//then pass it on to the article table component. 






export default function ContentScheduleListView() {



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
            <Grid item xs={6}> <ArticleTable/> </Grid>
            <Grid item xs={6}> <ArticleTable/> </Grid>

            {/* Testing - 4th line*/}
            <Grid></Grid>
        </Grid>
        </>
    )
}