import * as React from 'react';
import TextField from '@mui/material/TextField';
import {ModalContext} from "./ModalContext"

export default function SearchInput() {
  const [search, setSearch] = React.useState('');

  return (
    <TextField
      id="outlined-basic"
      label="Search"
      variant="outlined"
      fullWidth
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export function IdeaInput() {
const {idea, setIdea} = React.useContext(ModalContext)

  return(
  <TextField 
    id="idea-box" 
    label="Idea" 
    placeholder="Name of your idea" 
    fullWidth 
    value={idea}
    onChange={e => setIdea(e.target.value)}/>
  )
}

export function DescriptionInput() {
  const { description, setDescription} = React.useContext(ModalContext);

  return(
    <TextField 
    id="description-textbox" 
    label="Description" 
    multiline rows={4} 
    placeholder="Max. 100 characters" 
    fullWidth 
    value={description}
    onChange={e => setDescription(e.target.value)}/>
  )
}
