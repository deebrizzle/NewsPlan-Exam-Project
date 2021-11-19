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
import {useEffect} from "react";

const rows = [
  {
    id: 1,
    date: "01-04",
    headline: "A.P Møller and his tragic childhood",
    writer: "KSM",
    status: "P",
  },
  {
    id: 2,
    date: "01-04",
    headline: "Mysterious phone call with Prime minister",
    writer: "ELM",
    status: "F",
  },
  {
    id: 3,
    date: "01-04",
    headline: "Floods displace nearly 1 million people",
    writer: "MC",
    status: "F",
  },
  {
    id: 4,
    date: "01-04",
    headline: "Facebook Breakdown",
    writer: "KSM",
    status: "F",
  },
  {
    id: 5,
    date: "01-04",
    headline: "Mass protests in Brussels",
    writer: "YCM",
    status: "F",
  },
  {
    id: 6,
    date: "01-04",
    headline: "Is the climate crisis actually real?",
    writer: "KSM",
    status: "P",
  },
  {
    id: 7,
    date: "01-04",
    headline: "Election day?",
    writer: "KSM",
    status: "F",
  },
  {
    id: 8,
    date: "01-04",
    headline: "Another headline ",
    writer: "KSM",
    status: "D",
  },
];


 
function Notification(status) {
    if (status === "D") {
      return <ErrorIcon htmlColor="#415B68" style={{ float: "right" }}/>;
    }
    return <></>;
  }
    

  async function getArticles() {
    const Articles = Parse.Object.extend("Articles");
    const query = new Parse.Query(Articles);
    query.equalTo("status", "F")
    return await query.find()
   
  }


export default function ArticleTable() {
  //TODO: make event handler open the article
  //TODO: make button for accepting/denying
  //TODO: do something about the padding/margin on the h6 tag
  //TODO: place the icons correctly and make them clickable
  const [articles, setArticles] = React.useState();
  const [finished, setFinished] = React.useState("");
  const [unfinished, setUnfinished] = React.useState("");

  useEffect(() => {
      getArticles().then((article) => {
          setArticles(article)
          
      })
      
  }, [])

  if (!articles) {
      return <p>loading</p>
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
              <TableCell>{row.get("publishDate")}</TableCell>
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

