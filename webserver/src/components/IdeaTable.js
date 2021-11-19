import { DataGrid } from "@mui/x-data-grid";
import IdeaTableFunc from "./IdeaTableFunc";

export default function Table() {
  const table = IdeaTableFunc();
  let rows = table[0];
  const columns = table[1];

  return(
    <div style={{ height: 500, width: "100%" }}>
      <div style={{ display: "flex", height: "100%" }}>
        <div style={{ flexGrow: 2 }}>
          <DataGrid rows={rows} columns={columns} pageSize={7} />
        </div>
      </div>
    </div>
  );
}
