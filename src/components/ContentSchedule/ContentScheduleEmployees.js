import { Box, Grid } from "@mui/material";
import { ScheduledArticles } from "./ScheduledArticles";
import { SelectSection } from "../SelectFields/SelectSection";
import { SelectSource } from "../SelectFields/SelectSource";
import { SelectDate } from "../SelectFields/SelectDate";
import { useContext, useEffect, useState } from "react";
import { getAllArticles, mapArticles} from "../../database/articles";
import {articleFilterEmployees, articleFilterSectionEmployees,} from "../../database/articlesHelpers";
import { groupBy } from "../../utils/groupBy";
import GridSpacer from "../Gridspacer";
import Loading from "../Loading"
import { FieldContext } from "../FieldContext";
import {StandardButton} from "../Button.styles";

export default function ContentScheduleEmployees() {
  const {section, date, ideaSource, resetContext} = useContext(FieldContext);
  const [allArticles, setAllArticles] = useState();
  const [filteredArticles, setFilteredArticles] = useState();

  //Get all articles from the database and then groups them by usernamse of journalists
  useEffect(() => {
    getAllArticles(date).then((articles) => {
      setAllArticles(groupBy(mapArticles(articles), "username"));
      setFilteredArticles(articles);
    });
  }, [date, ideaSource, section]);


  //TODO this is not pretty code.. really had trouble with all the different kinds of data - and stuff
  //being undefined. if the data is grouped and mapped it does not work with the filters. I tried..
  const filteredSection = articleFilterSectionEmployees(filteredArticles, section);
  const filteredSectionSource = articleFilterEmployees(filteredSection,ideaSource);

  let articles;
  if (filteredSectionSource === undefined || filteredSectionSource === []) {
    articles = allArticles;
  } else {
    articles = groupBy(mapArticles(filteredSectionSource), "username");
  }

  if (articles === undefined) {
    return <Loading/>  
  } else
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={2}> <SelectDate /> </Grid>
          <Grid item xs={2}> <SelectSection /></Grid>
          <GridSpacer spacing={8} />
          <Grid item xs={4}> <SelectSource label="Source" /></Grid>
          <Grid item xs={4}> <StandardButton onClick={resetContext}>Reset</StandardButton></Grid>
          <GridSpacer spacing={4} />
          <ScheduledArticles articles={articles} itemsPerPage={3} />
        </Grid>
      </Box>
    );
}
