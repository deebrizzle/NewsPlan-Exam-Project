import { useEffect, useState } from "react";
import { workLoadSummarizer } from "../../database/Articles";
//for displaying cloud function data

const Work = ({ date, user }) => {
  const [workloadCloud, setWorkloadCloud] = useState();

  useEffect(() => {
    workLoadSummarizer(user, date).then((sum) => setWorkloadCloud(sum));
  }, []);

  return (
    <li>
      {user}: {workloadCloud}
    </li>
  );
};
export default Work;
