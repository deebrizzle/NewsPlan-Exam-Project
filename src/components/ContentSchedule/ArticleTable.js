import React, { useContext } from "react";
import { MyDataGrid } from "../IdeaTable.styles";
import { ContentContext } from "./ContentScheduleContext";
import { articleFilterSection, articleFilterSource } from "../../database/Articles";
import { StyledAlertIcon } from "./ArticleTable.styles";

export default function ArticleTable({articles}) {
  const {sectionContent, sourceContent} = useContext(ContentContext);

  const filteredSection = articleFilterSection(articles, sectionContent);
  const filteredSectionSource = articleFilterSource(filteredSection, sourceContent)

  const columns = [
    { field: "dayMonthDate", headerName: "Deadline", minWidth: 100 },
    { field: "username", headerName: "Source", minWidth: 100  },
    { field: "headline", headerName: "Headline", width: 250, flex: 3 },
    { field: "status", headerName: "Status", minWidth: 150, },
    {
      field: 'notification',
      headerName: '',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 75,
      renderCell: (params) => {
        if (params.row.status === "D") {
          return <StyledAlertIcon/>
        }
      }
    }
   ]

  function handleRowClick (e) {}
  
  return(
        <div style={{ height: 420, width: "100%", flexGrow: 2, display: "flex" }}>
          <MyDataGrid getRowId={(row) => row.objectId} rows={filteredSectionSource} columns={columns} rowsPerPageOptions={[20]} pageSize={20} onRowClick={(e) => handleRowClick(e)}/>
        </div>
  );
}
 