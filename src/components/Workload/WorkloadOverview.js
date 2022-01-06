import { useEffect, useState, useContext } from "react";
import { getUsers } from "../../database/users";
import { Grid } from "@mui/material";
import WorkloadTable from "../Tables/WorkloadTable";
import Loading from "../Loading";
import Gridspacer from "../Gridspacer"
import { SelectDate } from "../SelectFields/SelectDate";
import { SelectSection } from "../SelectFields/SelectSection";
import {FieldContext} from "../FieldContext"

//for displaying cloud function data
export default function WorkloadOverview() {

  const {date, setDate} = useContext(FieldContext);
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
          <Grid item xs={2}><SelectDate label="Date" /></Grid>
          <Grid item xs={2}><SelectSection /></Grid>
          <Gridspacer spacing={8}/>
          <Grid item xs={6}><WorkloadTable allUsers={users} date={date}/></Grid>
      </Grid>
    );
}
