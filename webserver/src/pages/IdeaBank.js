import NavBar from "../components/NavBar";
import {Grid, Stack } from '@mui/material';
import IdeaModal from "../components/Idea";
import React, { useState } from "react";
import Table from "../components/IdeaTable"
import { PageWrapper } from "./PageMargin.styles";
import SearchInput from "../components/InputFields";
import {SelectSection} from "../components/SelectFields";
import CalendarPopup from "../components/CalendarPopup"
import {SaveButton} from "../components/Button.styles"

function IdeaBank() {

  const [modalShow, setModalShow] = useState(false);
  const handleSearch = () => console.log("Save the idea into the database. Reset all states to empty")

    return (
        <>
        <NavBar/>
        <PageWrapper>
            <h1>Idea Bank</h1>
            <Grid container spacing={3}>
              {/* FIRST ROW - CALENDAR, SECTION*/}
              <Grid item xs={3}> <CalendarPopup/> </Grid>
              <Grid item xs={3}> <SelectSection/> </Grid>
              <Grid item xs={6}/>

              {/* SECOND ROW - SEARCH, SAVE, ADD IDEA */}
              <Grid item xs={6}> <SearchInput/> </Grid>
              <Grid item xs={4}> <SaveButton>Search</SaveButton> </Grid>

              <Grid item xs={2} justifyContent="flex-end"> 
                <Stack direction ="row" justifyContent ="flex-end">
                  <IdeaModal show ={modalShow} onHide={() => setModalShow(false)}/> 
                </Stack>
              </Grid>

              {/* THIRD ROW - TABLE */}
              <Grid item xs={12}> <Table/> </Grid>

            </Grid>
        </PageWrapper>
        </>
          );
  }
  export default IdeaBank