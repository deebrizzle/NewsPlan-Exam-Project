import React from "react";
import { MyDataGrid } from "./IdeaTable.styles";
import { getCommentsFromArticle } from '../database/Comments'

export default function CommentTable({articleId}) {

    const comments = getCommentsFromArticle(articleId)

    const columns = [
        { field: "username", headerName: "Author", minWidth: 100  },
        { field: "headline", headerName: "Comment", width: 500, flex: 3 }
    ]

    function handleRowClick (e) {}
  
    return(
        <div style={{ height: 210, width: "100%", flexGrow: 2, display: "flex" }}>
            <MyDataGrid getRowId={(row) => row.objectId} rows={comments} columns={columns} rowsPerPageOptions={[20]} pageSize={20} onRowClick={(e) => handleRowClick(e)}/>
        </div>
    );
}
 