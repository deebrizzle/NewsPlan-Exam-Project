import { useEffect, useState } from "react";
import { workLoadSummarizer } from "../../database/Articles";
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
//for displaying cloud function data

const Work = ({ date, user }) => {
  const [workloadCloud, setWorkloadCloud] = useState();

  useEffect(() => {
    workLoadSummarizer(user, date).then((sum) => setWorkloadCloud(sum));
  }, []);

  return (
      <TableRow>
        <TableCell>{user}</TableCell>
        <TableCell>{workloadCloud}</TableCell>
      </TableRow>
  );
};
export default Work;
