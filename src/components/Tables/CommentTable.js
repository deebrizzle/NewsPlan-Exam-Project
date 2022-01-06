import React from "react";
import { StyledDataGrid } from "./IdeaTable.styles";
import { getCommentsFromArticle } from '../../database/comments'
import { Grid } from "@mui/material";


export default function CommentTable({articleId}) {

    const comments = getCommentsFromArticle(articleId)

    const columns = [
        { field: "username", headerName: "Author", minWidth: 100  },
        { field: "headline", headerName: "Comment", width: 500, flex: 3 }
    ]

    function handleRowClick (e) {}
  
    return(
        <Grid style={{ height: 200 }}>
            <StyledDataGrid 
            getRowId={(row) => row.objectId} 
            rows={comments} columns={columns} 
            rowsPerPageOptions={[3]} 
            pageSize={3} 
            onRowClick={(e) => handleRowClick(e)}/>
        </Grid>
    );
}
 