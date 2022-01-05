import { useEffect, useState } from "react";
import Work from "./Work";
import { getUsers } from "../../database/Users";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

//for displaying cloud function data
function WorkloadDisplay() {
  const dateObj = new Date(2022, 0, 28, 0, 0, 0, 0);
  const [users, setUsers] = useState();

  useEffect(() => {
    getUsers().then((user) => setUsers(user));
  }, []);

  if (users === undefined) {
    return <p>Loading...</p>;
  } else
    return (
      <>
        <h1>This page should display a calendar</h1>
        <a href="https://www.figma.com/file/zXgh3dP8smOBHPw03p1cFP/Hi-Fi-Prototype?node-id=473%3A22344">
          Click here to see the calendar in Figma
        </a>
        <p>
          Instead, here is the total workload for each journalist on the 27th of
          January 2022, generated in Back4app Cloud Code.
        </p>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 150 }} size="small">
            <TableHead>
              <TableRow>
                <TableCell>Journalist</TableCell>
                <TableCell>Total Workload</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <Work
                  key={user.id}
                  user={user.get("username")}
                  date={dateObj}
                ></Work>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
}
export default WorkloadDisplay;
