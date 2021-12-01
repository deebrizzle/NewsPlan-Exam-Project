import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ErrorIcon from "@mui/icons-material/Error";
import { ConvertDate } from "./ConvertDate";
import { StyledTableContainer, StyledTableLink, StyledTableCell } from "./Table.styles";
import { StyledEditIcon } from "./Table.styles";

//TODO: make styled component
function Notification(status) {
  if (status === "D") {
    return <ErrorIcon htmlColor="#415B68" style={{ float: "right" }} />;
  }
  return <></>;
}

const ArticleTable = ({ articles }) => {
  //TODO: make button for accepting/denying
  //TODO: place the icons correctly and make them clickable
  //TODO: add color to colorfile

  return (
    <TableContainer>
      <StyledTableContainer>
        <Table
          stickyHeader={true}
          sx={{ minWidth: 200 }}
          aria-label="article table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell >Date</StyledTableCell>
              <StyledTableCell >Headline</StyledTableCell>
              <StyledTableCell >Writer</StyledTableCell>
              <StyledTableCell >Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {articles?.map((row) => (
              <TableRow key={row.objectId}>
                <TableCell>
                  {ConvertDate(String(row.get("publishDate")))}
                </TableCell>
                <TableCell>
                  <StyledTableLink to={`/contentschedule/${row.id}`}>
                    {row.get("headline")}
                    {console.log(row.id)}
                  </StyledTableLink>
                </TableCell>
                <TableCell>{row.get("responsible").get("username")}</TableCell>
                <TableCell>
                  {row.get("status")}
                  <StyledEditIcon
                    htmlColor="#415B68"
                    fontSize="small"
                  ></StyledEditIcon>
                  <Notification status={row.get("status")}></Notification>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>
    </TableContainer>
  );
};
export default ArticleTable;
