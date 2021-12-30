import React, {useContext} from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { convertToDayMonthString } from "../convertDate";
import { StyledTableContainer, StyledTableCell, StyledAlertIcon } from "./ArticleTable.styles";
import { ContentContext } from "./ContentScheduleContext"
import { articleFilterSection, articleFilterSource } from "../../database/Articles";

function Notification({ status }) {
  if (status === "D") {
    return <StyledAlertIcon />;
  }
  return <></>;
}

const ArticleTable = ({ articles }) => {
  const {sectionContent, sourceContent} = useContext(ContentContext);

  const filteredSection = articleFilterSection(articles, sectionContent);
  const filteredSectionSource = articleFilterSource(filteredSection, sourceContent);

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
            {filteredSectionSource?.map((articleRow) => (
              <TableRow key={articleRow.id}>
                <TableCell>
                  {convertToDayMonthString(String(articleRow.get("publishDate")))}
                </TableCell>
                <TableCell>
                    {articleRow.get("headline")}
                </TableCell>
                <TableCell>{articleRow.get("responsible").get("username")}</TableCell>
                <TableCell>
                  {articleRow.get("status")}
                  <Notification status={articleRow.get("status")}></Notification>
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
