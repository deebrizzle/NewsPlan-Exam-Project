import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
<<<<<<< HEAD
import ErrorIcon from "@mui/icons-material/Error";
import { ConvertDate } from "./ConvertDate";
import { MyTableContainer,  MyTableLink} from "./Table.styles";
import { StyledEditIcon } from "./Table.styles";

=======
import { ConvertDate } from "./ConvertDate";
import {
  StyledTableContainer,
  StyledTableLink,
  StyledTableCell,
  StyledAlertIcon,
} from "./ArticleTable.styles";
>>>>>>> 5c1af00eaf8e9d806d906f28cd1046249aaeb5d5

function Notification({ status }) {
  if (status === "D") {
    return <StyledAlertIcon />;
  }
  return <></>;
}

const ArticleTable = ({ articles }) => {
  
  return (
    <TableContainer>
<<<<<<< HEAD
         <MyTableContainer>
      <Table stickyHeader={true} sx={{ minWidth: 200 }} aria-label="article table">
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
              <TableCell>
                {ConvertDate(String(row.get("publishDate")))}
              </TableCell>
              <TableCell>
                <MyTableLink to={`/contentschedule/${row.id}`}>
                  {row.get("headline")}{console.log(row.id)}
                </MyTableLink>
              </TableCell>
              <TableCell>{row.get("responsible").get("username")}</TableCell>
              <TableCell>
                {row.get("status")}
                <StyledEditIcon htmlColor="#415B68"
                  fontSize="small">
                </StyledEditIcon>
                <Notification status={row.get("status")}></Notification>
              </TableCell>
=======
      {console.log(articles)}
      <StyledTableContainer>
        <Table
          stickyHeader={true}
          sx={{ minWidth: 200 }}
          aria-label="article table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell>Date</StyledTableCell>
              <StyledTableCell>Headline</StyledTableCell>
              <StyledTableCell>Writer</StyledTableCell>
              <StyledTableCell>Status</StyledTableCell>
>>>>>>> 5c1af00eaf8e9d806d906f28cd1046249aaeb5d5
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
