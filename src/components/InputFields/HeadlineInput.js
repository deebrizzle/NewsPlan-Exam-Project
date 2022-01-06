import React, {useContext} from 'react';
import TextField from '@mui/material/TextField';
import {FieldContext} from "../FieldContext"

export function HeadlineInput() {
  const {idea} = useContext(FieldContext)
  const {headline, setHeadline} = useContext(FieldContext)
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


