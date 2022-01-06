import React, {useContext} from 'react';
import TextField from '@mui/material/TextField';
import {ModalContext} from "./ModalContext"

export default function SearchInput(props) {
  const {search, setSearch} = props;

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
const {idea, setIdea} = useContext(ModalContext)

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
  const { description, setDescription} = useContext(ModalContext);

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

export function HeadlineInput() {
  const {idea} = useContext(ModalContext)
  const {headline, setHeadline} = useContext(ModalContext)
  setHeadline(idea);

  return (
    <TextField
      id="outlined-basic"
      label="Headline"
      variant="outlined"
      fullWidth
      value={headline}
      onChange={(e) => setHeadline(e.target.value)}
    />
  );
}


