import { useEffect, useState } from "react";
import Work from "./Work";
import { getUsers } from "../../database/Users";

//for displaying cloud function data
function WorkloadDisplay() {
  const dateObj = new Date(2022, 0, 28, 0, 0, 0, 0);
  const [users, setUsers] = useState();

  useEffect(() => {
    getUsers().then((user) => setUsers(user));
  }, []);

  return (
    <>
      <ul>
        <h6>This page should display a calendar like in Figma.</h6>{" "}
        <a href="https://www.figma.com/file/zXgh3dP8smOBHPw03p1cFP/Hi-Fi-Prototype?node-id=473%3A22344">
          Click here for Figma
        </a>
        <p>
          Instead, here is the total workload for each journalist on the 27th of
          January 2022, generated in Back4app Cloud Code.
        </p>
        {users?.map((user) => (
          <Work
            key={user.objectId}
            user={user.get("username")}
            date={dateObj}
          ></Work>
        ))}
      </ul>
    </>
  );
}
export default WorkloadDisplay;
