import { Box, Grid } from "@mui/material";
import UserContentArticle from "./UserContentArticle";
import { SelectSection, SelectSource } from "./SelectFields"
import CalendarPopup from "./CalendarPopup"
import React, {useEffect} from "react";
import {getAllArticles} from "../database/Articles"
import {getIdeas} from "../database/Ideas"
import { getSections } from "../database/Sections";

export default function ContentScheduleCalendarView() {
  const [articles, setArticles] = React.useState();
  const [date, setDate] = React.useState(new Date(2021, 10, 17, 0, 0, 0, 0));
  const [section, setSection] = React.useState();

  const handleCallbackDate = (Date) =>{
    setDate(Date)
    console.log(Date)
  }

  //TODO handle callback is causing the input field not to update. If set to handleCallBack = () => {} then it works. 
  const handleCallBackSelection = (selectedSection) => {
    setSection(selectedSection)
    console.log(selectedSection)
  }

  function groupBy(arr, key) {
    const newArr = arr.reduce(function(acc, currVal) {
      if (!acc[currVal[key]]) {
        acc[currVal[key]] = [];
      }
      acc[currVal[key]].push(currVal)
      return acc;
    }, {});
    return newArr;
  }

  function mapArticles() {
      const articlesInfo = [] = articles.map((article) => {
        return {
          objectId: article.objectId,
          ideaId: article.idea,
          headline: article.headline,
          status: article.status,
          publishDate: article.publishDate,
          username: article.get("responsible").get("username")
        }
      })
      setArticles(articlesInfo)
  }
 
  //TODO: add error handling
  useEffect(() => {
    setDate(date)
    getIdeas()

    getAllArticles(date).then((article) => {
      setArticles(article);
    });


  }, [date, section]);


  if (articles === undefined) {
    return <p>Loading...</p>;
  } else 

  return (
    <Box>
      <Grid container spacing = {2}>
        <Grid item xs={2}> <SelectSource handleCallBackSelection={handleCallBackSelection}/> </Grid>
        <Grid item xs={2}> <SelectSection handleCallBackSelection={handleCallBackSelection}/> </Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs={2} justifyContent="left"> <CalendarPopup handleCallbackDate={handleCallbackDate}/> </Grid>
      </Grid>
      <Grid container direction="row" justifyContent="space-evenly" alignItems="center">
        {console.log(articles)}
        {console.log(groupBy(articles, "username"))}
        <Grid >
          <UserContentArticle />
        </Grid>
        <Grid>
          <UserContentArticle />
        </Grid>
        <Grid>
          <UserContentArticle />
        </Grid>
        <Grid>
          <UserContentArticle />
        </Grid>
        <Grid>
          <UserContentArticle />
        </Grid>
      </Grid>
    </Box>
  );
}
