import React, { useContext } from "react";
import { MyDataGrid } from "../IdeaTable.styles";
import { ContentContext } from "./ContentScheduleContext";
import { convertDateModal, convertToDayMonthString } from "../convertDate";
import { articleFilterSection, articleFilterSource } from "../../database/Articles";

export default function ArticleTableTwo({articles}) {
  const {sectionContent, sourceContent} = useContext(ContentContext);

  const filteredSection = articleFilterSection(articles, sectionContent);
  const filteredSectionSource = articleFilterSource(filteredSection, sourceContent)

  const columns = [
    { field: "publishDate", headerName: "Deadline", minWidth: 150, flex: 1 },
    { field: "username", headerName: "Source", minWidth: 150, flex: 1 },
    { field: "headline", headerName: "Headline", minWidth: 250, flex: 2 },
    { field: "status", headerName: "Status", minWidth: 350, flex: 3 },
  ]

  console.log(filteredSectionSource)

  function handleRowClick (e) {}
  
  return(
        <div style={{ height: 420, width: "100%", flexGrow: 2, display: "flex" }}>
          <MyDataGrid getRowId={(row) => row.id} rows={[]} columns={columns} rowsPerPageOptions={[20]} pageSize={20} onRowClick={(e) => handleRowClick(e)}/>
        </div>
  );
}
 