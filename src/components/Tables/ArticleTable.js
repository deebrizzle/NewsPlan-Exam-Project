import React, { useContext } from "react";
import { StyledDataGrid } from "./IdeaTable.styles";
import { articleFilterSection, articleFilterSource } from "../../database/Articles";
import { StyledAlertIcon } from "./ArticleTable.styles"
import {ModalContext} from "../ModalContext"
import { Grid } from "@mui/material";

export default function ArticleTable({articles}) {
  const {section, ideaSource} = useContext(ModalContext);
  const filteredSection = articleFilterSection(articles, section);
  const filteredSectionSource = articleFilterSource(filteredSection, ideaSource)
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
  
  // TODO Click to next X articles doesn't work
  return(
        <Grid style={{ height: 400 }}>
          <StyledDataGrid 
            getRowId={(row) => row.objectId} 
            rows={filteredSectionSource} 
            columns={columns} 
            rowsPerPageOptions={[10]} 
            pageSize={10} 
            onRowClick={(e) => handleRowClick(e)}/>
        </Grid>
  );
}
 