import React, { useContext } from "react";
import { StyledDataGrid } from "./IdeaTable.styles";
import { articleFilterSection, articleFilterSource } from "../../database/articlesHelpers";
import { StyledAlertIcon } from "./ArticleTable.styles"
import {FieldContext} from "../FieldContext"
import { Grid } from "@mui/material";

export default function ArticleTable({articles}) {
  const {section, ideaSource} = useContext(FieldContext);
  const filteredSection = articleFilterSection(articles, section);
  const filteredSectionSource = articleFilterSource(filteredSection, ideaSource)
  const columns = [
    { field: "dayMonthDate", headerName: "Deadline", minWidth: 75 },
    { field: "username", headerName: "Source", minWidth: 75  },
    { field: "headline", headerName: "Headline", minWidth: 250},
    { field: "status", headerName: "Status", minWidth: 75 },
    {
      field: 'notification',
      headerName: '',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 75,
      renderCell: (params) => {
        if (params.row.status === "D" || params.row.status === "C") {
          return <StyledAlertIcon/>
        }
      }
    }
   ]

  function handleRowClick (e) {}
  
  return(
        <Grid style={{ height: 375 }}>
          <StyledDataGrid 
            getRowId={(row) => row.objectId} 
            rows={filteredSectionSource} 
            columns={columns} 
            rowsPerPageOptions={[5]} 
            pageSize={5} 
            onRowClick={(e) => handleRowClick(e)}/>
        </Grid>
  );
}
 