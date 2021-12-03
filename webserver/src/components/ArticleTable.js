import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { ConvertDate } from "./ConvertDate";
import {
  StyledTableContainer,
  StyledTableLink,
  StyledTableCell,
  StyledAlertIcon,
} from "./Table.styles";

function Notification({ status }) {
  if (status === "D") {
    return <StyledAlertIcon />;
  }
  return <></>;
}

const ArticleTable = ({ articles }) => {
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
              <StyledTableCell>Date</StyledTableCell>
              <StyledTableCell>Headline</StyledTableCell>
              <StyledTableCell>Writer</StyledTableCell>
              <StyledTableCell>Status</StyledTableCell>
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
