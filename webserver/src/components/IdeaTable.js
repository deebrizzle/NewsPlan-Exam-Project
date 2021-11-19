import { DataGrid } from '@mui/x-data-grid';
import Parse from "parse";
import {useEffect, useState} from "react"

  const columns = [
  { field: 'createdAt', headerName: 'Lifetime', width: 150 },
  { field: 'source', headerName: 'Source', width: 150 },
  { field: 'ideaName', headerName: 'Idea', width: 250 },
  { field: 'description', headerName: 'Description', width: 350 },
];

async function getIdeas(){
  const Ideas = Parse.Object.extend("Ideas")
  const query = new Parse.Query(Ideas)
  query.include("username")
  return await query.find()
}

export default function Table() {
const [ideas, setIdeas] = useState();

  useEffect(() => {
    getIdeas().then((ideas) => {
        setIdeas(ideas)
    })
    
  }, [])

if (!ideas ) {
  return <p>loading</p>
}

let rows = [];
rows = ideas.map((row, index) => {
  console.log(row.get("ideaSource").get("first_name"))
  return ({
    id: index,
    createdAt: row.createdAt,
    source: row.get("ideaSource").get("first_name"), //usernames,//row.attributes.ideaSource.id,//row.get("ideaSource").get("username"), //obj.attributes.ideasource.username,
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