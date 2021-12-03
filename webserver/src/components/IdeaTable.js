import IdeaTableFunc from "./IdeaTableFunc";
import {MyDataGrid} from "./IdeaTable.styles"
import React from "react";
import {ModalContext} from "./ModalContext"
import { ConvertDateModal } from "./ConvertDate";

export default function Table() {
  const { open, setOpen, setDate, setIdea, setDescription, setVisibility, setIdeaSource, setSection} = React.useContext(ModalContext);
  
  const table = IdeaTableFunc();
  let rows = table[0];
  const columns = table[1];
  
  function HandleRowClick(params) {
    let date = ConvertDateModal(params.row.expirationDate)
    setIdea(params.row.ideaName)
    setDescription(params.row.description)
    setVisibility(params.row.visibility)
    setDate(date)
    setSection(params.row.section)
    setIdeaSource(params.row.source)
    setOpen(true)
    return open

  // Tried this to only open when the above data is read. But its the loading into the window which is dealyed - not fecthing from database
  // setTimeout(() => {
  //   setOpen(true)
  //   return open
  // }, 5000);
  };

  //TODO Filtering already added in table automatically - remove search panel and add from MaterialUI Quick Filtering demo?
  //See https://mui.com/components/data-grid/filtering/ for above TODO
  
  return(
    <div style={{ height: 500, width: "100%", paddingBottom:20}}>
      <div style={{ display: "flex", height: "100%" }}>
        <div style={{ flexGrow: 2 }}>
          <MyDataGrid rows={rows} columns={columns} pageSize={20}  onRowClick={(e) => HandleRowClick(e)}/>
        </div>
      </div>
    </div>
  );
}
