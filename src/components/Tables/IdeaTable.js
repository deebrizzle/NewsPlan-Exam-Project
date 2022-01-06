import {StyledDataGrid} from "./IdeaTable.styles"
import {ModalContext} from "../ModalContext"
import { convertDateModal } from "../../utils/convertDate";
import { getSection } from "../../database/Sections";
import { getUser } from "../../database/Users";
import React, { useEffect, useContext} from "react";
import { getIdeas, ideaFilterSection, ideaFilterSearch } from "../../database/Ideas.js";
import { Grid } from "@mui/material";

export default function IdeaTable({setOpen, search}) {
  const {setSectionObject, setIdeaSourceObject, setIdeaId, setDate, setIdea, setDescription, setVisibility, setIdeaSource, setSection, section, listOfIdeas, setListOfIdeas} = useContext(ModalContext)

  useEffect(() => {
    getIdeas().then((ideas) => {
      setListOfIdeas(ideas);
    });
  }, [])

  
  const filteredSection = ideaFilterSection(listOfIdeas, section);
  const filteredSectionSearch = ideaFilterSearch(filteredSection, search);

  const columns = [
    { field: "expirationDate", headerName: "Expiry Date", minWidth: 150, flex: 1 },
    { field: "source", headerName: "Source", minWidth: 150, flex: 1 },
    { field: "ideaName", headerName: "Idea", minWidth: 250, flex: 2 },
    { field: "description", headerName: "Description", minWidth: 350, flex: 3 },
  ]
  
  function handleRowClick(params) {
    let date = convertDateModal(params.row.expirationDate)
    setIdea(params.row.ideaName)
    setDescription(params.row.description)
    setVisibility(params.row.visibility)
    setDate(date)
    setSection(params.row.section)
    setIdeaSource(params.row.source)
    setIdeaId(params.row.ideaId)
    
    getSection(params.row.section)
    .then((results) => {
      results.forEach((sectionObject) => {
        setSectionObject(sectionObject);
      });
    })
    .catch((error) => {
      console.log(error);
    });

    getUser(params.row.source)
    .then((results) => {
      results.forEach((userObject) => {
        setIdeaSourceObject(userObject);
      });
    })
    .catch((error) => {
      console.log(error);
    });
    setOpen(true)
  }
  
  return(
    <Grid style={{height:"500px"}}>
      <StyledDataGrid 
        getRowId={(row) => row.id}
        rows={filteredSectionSearch} 
        columns={columns} 
        rowsPerPageOptions={[10]} 
        pageSize={20} 
        onRowClick={(e) => handleRowClick(e)}
        />
    </Grid>
  );
}
