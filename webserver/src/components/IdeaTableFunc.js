import { useEffect, useState } from "react";
import { getIdeas } from "../database/Ideas.js";
import { getUsers } from "../database/Users.js";

export default function IdeaTableFunc() {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    getIdeas().then((ideas) => {
      setIdeas(ideas);
    });
    getUsers();
  }, []);

  const columns = [
    { field: "createdAt", headerName: "Lifetime", minWidth: 150, flex: 1 },
    { field: "source", headerName: "Source", minWidth: 150, flex: 1 },
    { field: "ideaName", headerName: "Idea", minWidth: 250, flex: 2 },
    { field: "description", headerName: "Description", minWidth: 350, flex: 3 },
  ];

  let rows = [];
  rows = ideas.map((row, index) => {
    return {
      id: index,
      createdAt: row.createdAt,
      source: row.get("ideaSource").get("username"),
      ideaName: row.attributes.ideaName,
      description: row.attributes.description,
    };
  });

  return [rows, columns];
}
