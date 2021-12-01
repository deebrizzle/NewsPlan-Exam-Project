import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ErrorIcon from "@mui/icons-material/Error";
import { ConvertDate } from "./ConvertDate";
import { MyTableContainer,  MyTableLink} from "./Table.styles";
import { StyledEditIcon } from "./Table.styles";


function Notification(status) {
  if (status === "D") {
    return <ErrorIcon htmlColor="#415B68" style={{ float: "right" }} />;
  }
  return <></>;
}

const ArticleTable = ({ articles }) => {
  //TODO: make event handler open the article
  //TODO: make button for accepting/denying
  //TODO: place the icons correctly and make them clickable

  return (
 
    <TableContainer>
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </MyTableContainer>
    </TableContainer>
  
  );
};
export default ArticleTable;
