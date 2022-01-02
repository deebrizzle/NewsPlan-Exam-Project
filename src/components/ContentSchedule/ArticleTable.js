import React, {useContext, useEffect, useState} from "react";
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
import { sortByString } from "../../utils/sortBy";

function Notification({ status }) {
  if (status === "D") {
    return <StyledAlertIcon />;
  }
  return <></>;
}

const ArticleTable = ({ articles }) => {
  const {sectionContent, sourceContent} = useContext(ContentContext);

  const [filteredSection, setFilteredSection] = useState(articleFilterSection(articles, sectionContent));
  const [filteredSectionSource, setFilteredSectionSource] = useState(articleFilterSource(filteredSection, sourceContent))

  //TODO onClick does not re-render the table, thus articles remains unsorted. 
  //TODO Add sorting graphic on Writer/Status TableCell OR add status filtering box for individual status sorts
  const handleWriterCellClick = (e) => {
    setFilteredSectionSource(sortByString(filteredSectionSource, "username"));
    console.log(filteredSectionSource)
  }

  const handleStatusCellClick = (e) => {
    setFilteredSectionSource(sortByString(filteredSectionSource, "status"));
    console.log(filteredSectionSource)
  }

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
              <StyledTableCell onClick={handleWriterCellClick}>Writer</StyledTableCell>
              <StyledTableCell onClick={handleStatusCellClick}>Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredSectionSource?.map((articleRow) => (
              <TableRow key={articleRow.objectId}>
                <TableCell>
                  {convertToDayMonthString(String(articleRow.publishDate))}
                </TableCell>
                <TableCell>
                    {articleRow.headline}
                </TableCell>
                <TableCell>{articleRow.username}</TableCell>
                <TableCell>
                  {articleRow.status}
                  <Notification status={articleRow.status}></Notification>
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
