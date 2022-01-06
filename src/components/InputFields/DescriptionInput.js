import React, {useContext} from 'react';
import TextField from '@mui/material/TextField';
import {FieldContext} from "../FieldContext"

export function DescriptionInput() {
  const { description, setDescription} = useContext(FieldContext);

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