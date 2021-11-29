import { DataGrid } from "@mui/x-data-grid";
import IdeaTableFunc from "./IdeaTableFunc";
import { Fragment } from "react";

export default function Table() {
  const table = IdeaTableFunc();
  let rows = table[0];
  const columns = table[1];

  //TODO Filtering already added in table automatically - remove search panel and add from MaterialUI Quick Filtering demo?
  //See https://mui.com/components/data-grid/filtering/ for above TODO

  return (
    <div style={{ height: 500, width: "100%" }}>
      <div style={{ display: "flex", height: "100%" }}>
        <div style={{ flexGrow: 2 }}>
          <DataGrid rows={rows} columns={columns} pageSize={20} />
        </div>
      </div>
    </div>
  );
}
