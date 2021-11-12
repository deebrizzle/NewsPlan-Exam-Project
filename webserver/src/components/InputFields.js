import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function SearchInput() {
  return (
      <TextField id="outlined-basic" label="Search" variant="outlined" fullWidth />
  );
}

export function IdeaInput() {
  return(
  <TextField id="idea-box" label="Idea" placeholder="Name of the idea" fullWidth/>
  )
}

export function DescriptionInput() {
  return(
    <TextField id="description-textbox" label="Description" multiline rows={4} placeholder="Max 100 characters" fullWidth />
  )
}