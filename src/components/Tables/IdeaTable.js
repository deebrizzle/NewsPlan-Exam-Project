import {StyledDataGrid} from "./IdeaTable.styles"
import {FieldContext} from "../FieldContext"
import { convertDateModal } from "../../utils/convertDate";
import { getSection } from "../../database/sections";
import { getUser } from "../../database/users";
import React, { useEffect, useContext} from "react";
import {getIdeas} from "../../database/ideas.js";
import {ideaFilterSection, ideaFilterSearch } from "../../database/ideasHelpers.js";
import { Grid } from "@mui/material";

export default function IdeaTable({setOpen, search}) {
  const {setSectionObject, setIdeaSourceObject, setIdeaId, setDate, setIdea, setDescription, setVisibility, setIdeaSource, setSection, section, listOfIdeas, setListOfIdeas} = useContext(FieldContext)

  useEffect(() => {
    getIdeas().then((ideas) => {
      setListOfIdeas(ideas);
    });
  }, [])

  
  const filteredSection = ideaFilterSection(listOfIdeas, section);
  const filteredSectionSearch = ideaFilterSearch(filteredSection, search);

  const columns = [
    { field: "expirationDate", headerName: "Expiry Date", minWidth: 125},
    { field: "source", headerName: "Source", minWidth: 75},
    { field: "ideaName", headerName: "Idea", minWidth: 250, flex: 2 },
    { field: "description", headerName: "Description", minWidth: 350, flex: 4 },
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
    <Grid style={{height: 425}}>
      <StyledDataGrid 
        getRowId={(row) => row.id}
        rows={filteredSectionSearch} 
        columns={columns} 
        rowsPerPageOptions={[6]} 
        pageSize={6} 
        onRowClick={(e) => handleRowClick(e)}
        />
    </Grid>
  );
}
