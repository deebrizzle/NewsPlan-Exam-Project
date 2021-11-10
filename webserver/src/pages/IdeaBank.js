import NavBar from "../components/NavBar";
import IdeaModal from "../components/Idea";
import React, { useState } from "react";
import ChooseDate from "../components/CalendarPopup"
import BasicSelect from "../components/BasicSelect"
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Table from "../components/IdeaTable"
import { IdeaWrapper } from "./IdeaBank.styles";
import SearchInput from "../components/SearchBar";
import SelectSection from "../components/SelectSection";

function IdeaBank() {

  const [modalShow, setModalShow] = useState(false);

    return (
        <>
        <NavBar/>
        <IdeaWrapper>
        <IdeaModal show ={modalShow} onHide={() => setModalShow(false)}/>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <h1>Idea Bank</h1>
            <ChooseDate />
            <div style={{display: 'flex'}}>
              <SelectSection />
              <SearchInput/>
            </div>
            <Table></Table>
          </LocalizationProvider>
          </IdeaWrapper>
        </>
          );
  }
  export default IdeaBank