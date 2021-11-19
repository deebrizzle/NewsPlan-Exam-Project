import { DataGrid } from '@mui/x-data-grid';
import {useEffect, useState} from "react"
import {getIdeas} from '../database/Ideas.js'
import {getUsers} from '../database/Users.js'

export default function Table() {

const [ideas, setIdeas] = useState();

  useEffect(() => {
    getIdeas().then((ideas) => {
        setIdeas(ideas)
    })
    getUsers()
  }, [])

if (!ideas ) {
  return <p>Loading</p>
}

const columns = [
  { field: 'createdAt', headerName: 'Lifetime', width: 150 },
  { field: 'source', headerName: 'Source', width: 150 },
  { field: 'ideaName', headerName: 'Idea', width: 250 },
  { field: 'description', headerName: 'Description', width: 350 },
];

let rows = [];
rows = ideas.map((row, index) => {
  console.log(row.get("ideaSource").get("first_name"))
  return ({
    id: index,
    createdAt: row.createdAt,
    source: row.get("ideaSource").get("username"),
    ideaName: row.attributes.ideaName,
    description: row.attributes.description,
  });
  
});

    return (
      <div style={{ height: 500, width: '100%' }}>
          <div style={{ display: 'flex', height: '100%' }}>
              <div style={{ flexGrow: 2 }}>
              <DataGrid 
                rows={rows} 
                columns={columns}
                pageSize={7}
                />
              </div>
          </div>
      </div>
    );
  }