import { Box, Grid } from "@mui/material";
import { UserContentTable } from "./UserContentTable";
import { SelectSection, SelectSource } from "./SelectFields";
import CalendarPopup from "./CalendarPopup";
import { useEffect, useState } from "react";
import { getAllArticles, mapArticles } from "../database/Articles";
import { getIdeas } from "../database/Ideas";
import { groupBy } from "../database/groupBy";

export default function ContentScheduleCalendarView() {
  const [articles, setArticles] = useState([]);
  const [date, setDate] = useState(new Date(2021, 10, 17, 0, 0, 0, 0));
  const [section, setSection] = useState();

  const handleCallbackDate = (Date) => {
    setDate(Date);
    console.log(Date);
  };

  //TODO handle callback is causing the input field not to update. If set to handleCallBack = () => {} then it works.
  const handleCallBackSelection = (selectedSection) => {
    setSection(selectedSection);
    console.log(selectedSection);
  };

  //TODO: add error handling
  useEffect(() => {
    setDate(date);
    getIdeas();

    getAllArticles(date).then((articles) => {
      setArticles(groupBy(mapArticles(articles), "username"));
    });
  }, [date, section]);

  if (articles === undefined) {
    return <p>Loading...</p>;
  } else
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            {" "}
            <SelectSource
              handleCallBackSelection={handleCallBackSelection}
            />{" "}
          </Grid>
          <Grid item xs={2}>
            {" "}
            <SelectSection
              handleCallBackSelection={handleCallBackSelection}
            />{" "}
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={2} justifyContent="left">
            {" "}
            <CalendarPopup handleCallbackDate={handleCallbackDate} />{" "}
          </Grid>
        </Grid>
        <UserContentTable articles={articles} itemsPerPage={6}></UserContentTable>
      </Box>
    );
}
