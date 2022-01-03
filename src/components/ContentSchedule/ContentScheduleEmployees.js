import { Box, Grid } from "@mui/material";
import { ScheduledArticles } from "./ScheduledArticles";
import { SelectSection } from "../SelectFields/SelectSection";
import { SelectSource } from "../SelectFields/SelectSource";
import { SelectDate } from "../SelectFields/SelectDate";
import { useContext, useEffect } from "react";
import { getAllArticles, mapArticles } from "../../database/Articles";
import { groupBy } from "../../utils/groupBy";
import { ContentContext } from "./ContentScheduleContext";
import GridSpacer from "../GridSpacer";

export default function ContentScheduleEmployees() {

  const {allArticles, setAllArticles, contentDate, sourceContent, sectionContent} = useContext(ContentContext);

  //Get all articles from the database and then groups them by usernamse of journalists
  useEffect(() => {
    getAllArticles(contentDate).then((articles) => {
      setAllArticles(groupBy(mapArticles(articles), "username"));
    });
  }, [contentDate, sourceContent, sectionContent]);

  if (allArticles === undefined) {
    return <p>Loading...</p>;
  } else
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={2}> <SelectSource /> </Grid>
            <Grid item xs={2}> <SelectSection /> </Grid>
            <GridSpacer spacing={6} />
            <Grid item xs={2}> <SelectDate/> </Grid>
            <ScheduledArticles articles={allArticles} itemsPerPage={6}/>
        </Grid>
      </Box>
    );
}
