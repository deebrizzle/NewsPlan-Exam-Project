import { useEffect, useState, useContext } from "react";
import { getUsers } from "../../database/Users";
import { Grid } from "@mui/material";
import WorkloadTable from "../Tables/WorkloadTable";
import Loading from "../Loading";
import Gridspacer from "../Gridspacer"
import { SelectDate } from "../SelectFields/SelectDate";
import { SelectSection } from "../SelectFields/SelectSection";
import { ModalContext } from "../ModalContext";

//for displaying cloud function data
export default function WorkloadOverview() {

  const {date, setDate} = useContext(ModalContext);
  const [users, setUsers] = useState();

  useEffect(() => {
    getUsers().then((user) => setUsers(user));
    setDate(new Date(2022, 0, 28));
  }, []);

  if (users === undefined) {
    return <Loading/>
  } else
    return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
           <h1>This page differs from Hi-Fi prototype, where we developed a Calendar</h1>
          <p>
            Instead we created an overview of total workload for each journalist on a specified date, here hard-coded to 27th of
            January 2022, generated in Back4app Cloud Code.
          </p>
          <a href="https://www.figma.com/file/zXgh3dP8smOBHPw03p1cFP/Hi-Fi-Prototype?node-id=473%3A22344">
            Click here to see it in Figma
          </a>
        </Grid>

          <Grid item xs={2}><SelectDate label="Date" /></Grid>
          <Grid item xs={2}><SelectSection /></Grid>
          <Gridspacer spacing={8}/>
          <Grid item xs={6}><WorkloadTable allUsers={users} date={date}/></Grid>
      </Grid>
    );
}
