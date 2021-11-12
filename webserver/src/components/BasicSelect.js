import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function BasicSelect(arrayOfOptions, label) {
  const [state, setState] = React.useState('');

  const handleChange = (event) => {
    setState(event.target.value);
  };

  return (
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
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

export default BasicSelect