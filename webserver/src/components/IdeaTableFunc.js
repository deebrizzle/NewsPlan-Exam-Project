import { useEffect, useState } from "react";
import { getIdeas } from "../database/Ideas.js";
import { getUsers } from "../database/Users.js";
import { getSections } from "../database/Sections.js";
import { ConvertDateWithYear } from "./ConvertDate.js";

export default function IdeaTableFunc() {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    getUsers();
    getSections();
    getIdeas().then((ideas) => {
      setIdeas(ideas);
    });
  }, []);

  const columns = [
    { field: "expirationDate", headerName: "Expiry Date", minWidth: 150, flex: 1 },
    { field: "source", headerName: "Source", minWidth: 150, flex: 1 },
    { field: "ideaName", headerName: "Idea", minWidth: 250, flex: 2 },
    { field: "description", headerName: "Description", minWidth: 350, flex: 3 },
  ];


  let rows = [];
  rows = ideas.map((row, index) => {
    if (!row.get("section").get("name")) return 'Waiting for rows';
    return {
      id: index,
      expirationDate: ConvertDateWithYear(String(row.attributes.expirationDate)),
      source: row.get("ideaSource").get("username"),
      ideaName: row.attributes.ideaName,
      description: row.attributes.description,
      ideaId: row.attributes.ideaID,
      section: row.get("section").get("name"),
      visibility: row.attributes.visibility,
    };
  });
  
  return [rows, columns];
}
