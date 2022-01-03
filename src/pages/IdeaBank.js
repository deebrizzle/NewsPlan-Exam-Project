import NavBar from "../components/Navigation/NavBar";
import {Grid, Stack } from '@mui/material';
import IdeaModal from "../components/IdeaModal";
import React from "react";
import Table from "../components/IdeaTable"
import { PageWrapper } from "./PageMargin.styles";
import SearchInput from "../components/InputFields";
import {SelectSection} from "../components/SelectFields/SelectSection";
import {SelectDate} from "../components/SelectFields/SelectDate"
import {StandardButton} from "../components/Button.styles"
import {ModalContext} from "../components/ModalContext"

function IdeaBank() {
  const {handleOpen, handleCallBack, modalShow, setModalShow } = React.useContext(ModalContext);

  return (
    <>
      <NavBar />
      <PageWrapper>
        <Grid container spacing={3}>
          {/* FIRST ROW - CALENDAR, SECTION*/}
          <Grid item xs={3}>
            {" "}
            <SelectDate handleCallbackDate={handleCallBack} />{" "}
          </Grid>
          <Grid item xs={3}>
            {" "}
            <SelectSection handleCallBackSelection={handleCallBack} />{" "}
          </Grid>
          <Grid item xs={6} />
              {/* SECOND ROW - SEARCH, SAVE, ADD IDEA */}
              <Grid item xs={6}> 
                <SearchInput /> 
                </Grid>
              <Grid item xs={4}> 
                <StandardButton> Search </StandardButton> 
              </Grid>
              <Grid xs={2} display="flex" justifyContent="flex-end" alignSelf="flex-end"> 
                <StandardButton onClick={handleOpen}>Add Idea</StandardButton>
              </Grid>
              <Grid item xs={2} justifyContent="flex-end"> 
                <Stack direction ="row" justifyContent ="flex-end">
                  <IdeaModal show ={modalShow} onHide={() => setModalShow(false)}/> 
                </Stack>
              </Grid>

          <Grid item xs={2} justifyContent="flex-end">
            <Stack direction="row" justifyContent="flex-end">
              <IdeaModal show={modalShow} onHide={() => setModalShow(false)} />
            </Stack>
          </Grid>

          {/* THIRD ROW - TABLE */}
          <Grid item xs={12}>
            {" "}
            <Table />{" "}
          </Grid>
        </Grid>
      </PageWrapper>
    </>
  );
}
export default IdeaBank;

