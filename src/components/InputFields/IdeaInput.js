import React, {useContext} from 'react';
import TextField from '@mui/material/TextField';
import {FieldContext} from "../FieldContext"

export function IdeaInput() {
const {idea, setIdea} = useContext(FieldContext)

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