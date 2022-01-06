import NavBar from "../components/Navigation/NavBar";
import {Grid, Stack } from '@mui/material';
import IdeaModal from "../components/IdeaModal";
import React, { useState, useContext} from "react";
import IdeaTable from "../components/Tables/IdeaTable"
import { PageWrapper } from "./PageMargin.styles";
import SearchInput from "../components/InputFields";
import {SelectSection} from "../components/SelectFields/SelectSection";
import {SelectDate} from "../components/SelectFields/SelectDate"
import {StandardButton} from "../components/Button.styles"
import {FieldContext} from "../components/FieldContext"
import GridSpacer from "../components/Gridspacer";

export default function IdeaBank() {
  const {setDate, setSection, setIdeaSource, setIdea, setDescription, setVisibility, setIdeaId} = useContext(FieldContext);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');

  const handleReset = () => {
    setSearch("")
    setDate(new Date())
    setSection('')
    setIdeaSource('')
    setIdea('')
    setDescription('')
    setVisibility('')
    setIdeaId('')
    
  };

  const handleOpen = () => {
    handleReset()
    setOpen(true)
  };

  return (
    <>
      <NavBar />
      <PageWrapper>
        <Grid container spacing={2}>
          {/* FIRST ROW - CALENDAR, SECTION*/}
          <Grid item xs={2}>
            <SelectDate />
          </Grid>
          <Grid item xs={2}>
            <SelectSection/>
          </Grid>
          <GridSpacer spacing={8} />
              {/* SECOND ROW - SEARCH, SAVE, ADD IDEA */}
              <Grid item xs={4}> 
                <SearchInput search={search} setSearch={setSearch}/> 
                </Grid>
              <Grid item xs={6}> 
                <StandardButton onClick={handleReset}> Reset </StandardButton> 
              </Grid>
              <Grid item xs={2} display="flex" justifyContent="flex-end" alignSelf="flex-end"> 
                <StandardButton onClick={handleOpen}>Add Idea</StandardButton>
              </Grid>
              <Grid item xs={2} justifyContent="flex-end"> 
                <Stack direction ="row" justifyContent ="flex-end">
                  <IdeaModal setOpen={setOpen} open={open} onHide={() => setOpen(false)}/> 
                </Stack>
              </Grid>
          {/* THIRD ROW - TABLE */}
          <Grid item xs={12}>
            <IdeaTable open={open} setOpen={setOpen} search={search}/>
          </Grid>
        </Grid>
      </PageWrapper>
    </>
  );
}

