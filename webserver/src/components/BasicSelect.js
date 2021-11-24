import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function BasicSelect({arrayOfOptions, label, handleCallBackSelection}) {
  const [state, setState] = React.useState('');

  const handleChange = (event) => {
    setState(event.target.value);
    handleCallBackSelection(state);
  };

  return (
      <FormControl fullWidth>
        <InputLabel id={label}>{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={state}
          label="Section"
          onChange={handleChange}>
          {arrayOfOptions.map((option) =>(
            <MenuItem value={option}>{option}</MenuItem>
          ))}
        </Select>
      </FormControl>
  );
}

