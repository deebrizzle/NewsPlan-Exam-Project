import {MyDataGrid} from "./IdeaTable.styles"
import {ModalContext} from "./ModalContext"
import { convertDateModal } from "./convertDate";
import { getSection } from "../database/Sections";
import { getUser } from "../database/Users";
import React, { useEffect, useContext} from "react";
import { getIdeas } from "../database/Ideas.js";
import { getUsers} from "../database/Users.js";
import { getSections } from "../database/Sections.js";

export default function Table() {
  const { setSectionObject, setIdeaSourceObject, setIdeaId, open, setOpen, setDate, setIdea, setDescription, setVisibility, setIdeaSource, setSection} = React.useContext(ModalContext)
  const {listOfIdeas, setListOfIdeas} = useContext(ModalContext);

  useEffect(() => {
    getUsers()
    getSections();
    getIdeas().then((ideas) => {
      setListOfIdeas(ideas);
    });
  }, [])

  const columns = [
    { field: "expirationDate", headerName: "Expiry Date", minWidth: 150, flex: 1 },
    { field: "source", headerName: "Source", minWidth: 150, flex: 1 },
    { field: "ideaName", headerName: "Idea", minWidth: 250, flex: 2 },
    { field: "description", headerName: "Description", minWidth: 350, flex: 3 },
  ]
  
  function HandleRowClick(params) {
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
    return open
  };

  //TODO Filtering already added in table automatically - remove search panel and add from MaterialUI Quick Filtering demo?
  //See https://mui.com/components/data-grid/filtering/ for above TODO
  
  return(
        <div style={{ height: 500, width: "100%", flexGrow: 2, display: "flex" }}>
          <MyDataGrid getRowId={(row) => row.id} rows={listOfIdeas} columns={columns} pageSize={20}  onRowClick={(e) => HandleRowClick(e)}/>
        </div>
  );
}
