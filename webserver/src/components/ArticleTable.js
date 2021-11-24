import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ErrorIcon from "@mui/icons-material/Error";
import EditIcon from "@mui/icons-material/Edit";
import {ConvertDate} from "./ConvertDate"


function Notification(status) {
  if (status === "D") {
    return <ErrorIcon htmlColor="#415B68" style={{ float: "right" }} />;
  }
  return <></>;
}

const ArticleTable = ({articles}) => {
  //TODO: make event handler open the article
  //TODO: make button for accepting/denying
  //TODO: place the icons correctly and make them clickable
  return (
    <TableContainer
      style={{
        borderRadius: "5px",
        height: 400,
        width: "100%",
        overflow: "auto",
      }}
    >
      <Table stickyHeader sx={{ minWidth: 200 }} aria-label="article table">
        <TableHead>
          <TableRow>
            <TableCell style={{ background: "#EBF5FA" }}>Date</TableCell>
            <TableCell style={{ background: "#EBF5FA" }}>Headline</TableCell>
            <TableCell style={{ background: "#EBF5FA" }}>Writer</TableCell>
            <TableCell style={{ background: "#EBF5FA" }}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {articles?.map((row) => (
            <TableRow key={row.objectId}> 
              <TableCell>{ConvertDate(String(row.get("publishDate")))}</TableCell>
              <TableCell onClick={() => alert("headline is clicked")}>
                {row.get("headline")}
              </TableCell>
              <TableCell>{row.get("responsible").get("username")}</TableCell>
              <TableCell>
                {row.get("status")}
                <EditIcon
                  htmlColor="#415B68"
                  fontSize="small"
                  style={{ width: "20%", float: "right" }}
                />
                <Notification status={row.get("status")}></Notification>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default ArticleTable;
