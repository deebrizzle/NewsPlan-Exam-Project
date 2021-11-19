import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ErrorIcon from "@mui/icons-material/Error";
import EditIcon from "@mui/icons-material/Edit";
import Parse from "parse";
import { useEffect } from "react";

function Notification(status) {
  if (status === "D") {
    return <ErrorIcon htmlColor="#415B68" style={{ float: "right" }} />;
  }
  return <></>;
}

//Mon Nov 01 2021 16:27:00 GMT+0100 (Centraleuropæisk normaltid)
function convertDate(date) {
  const dateArray = date.split(" ");
  const dateString = dateArray[2] + " " + dateArray[1];
  return dateString;

}

async function getArticles() {
  const Articles = Parse.Object.extend("Articles");
  const query = new Parse.Query(Articles);
  query.include("responsible")
  query.equalTo("status", "F");
  return await query.find();
}

export default function ArticleTable() {
  //TODO: make event handler open the article
  //TODO: make button for accepting/denying
  //TODO: place the icons correctly and make them clickable

  const [articles, setArticles] = React.useState();

  useEffect(() => {
    getArticles().then((article) => {
      setArticles(article);
    });
  }, []);

  if (!articles) {
    return <p>Loading...</p>;
  }

  //4 parse objects are returned. how to map thought them?

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
          {articles.map((row) => (
            <TableRow key={row.objectId}> 
              <TableCell>{convertDate(String(row.get("publishDate")))}</TableCell>
              <TableCell onClick={() => alert("headline is clicked")}>
                {row.get("headline")}
              </TableCell>
              <TableCell>{row.get("responsible").get("name")}</TableCell>
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
