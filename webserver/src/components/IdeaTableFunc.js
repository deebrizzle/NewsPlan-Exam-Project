import { useEffect, useState} from "react";
import { getIdeas } from "../database/Ideas.js";
import { getUsers } from "../database/Users.js";
import { getSections } from "../database/Sections.js";
import { ConvertDateWithYear } from "./ConvertDate.js";

export default function IdeaTableFunc() {
  const [ideas, setIdeas] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
    getSections();
    getIdeas().then((ideass) => {
      setIdeas(ideass);
      console.log("hii")
    });
  }, []);
  // We should put "ideas" inside of the bracket, so we update when ideas change. But they change every second. So something is wrong. 

  const columns = [
    { field: "expirationDate", headerName: "Expiry Date", minWidth: 150, flex: 1 },
    { field: "source", headerName: "Source", minWidth: 150, flex: 1 },
    { field: "ideaName", headerName: "Idea", minWidth: 250, flex: 2 },
    { field: "description", headerName: "Description", minWidth: 350, flex: 3 },
  ];

  let rows = [];
  rows = ideas.map((row, index) => {
   //I stedet for at retunere dem direkte så lav en state med al informationen. eller en komponent. lad være med at display i takt med at det hentes
    return {
      id: index,
      expirationDate: ConvertDateWithYear(String(row.attributes.expirationDate)),
      source: row.get("ideaSource").get("username"),
      ideaName: row.attributes.ideaName,
      description: row.attributes.description,
      ideaId: row.id,
      section: row.get("section").get("name"),
      visibility: row.attributes.visibility,
    };
  });

  return [rows, columns];
}
