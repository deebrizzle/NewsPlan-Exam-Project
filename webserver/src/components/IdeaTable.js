import { DataGrid } from "@mui/x-data-grid";
import IdeaTableFunc from "./IdeaTableFunc";
import {MyDataGrid} from "./IdeaTable.styles"
import React, { useState } from "react";
import IdeaModal from "../components/Idea";
import HandleRowClick from "./handleRowClick";

export default function Table() {
  const table = IdeaTableFunc();
  let rows = table[0];
  const columns = table[1];


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
