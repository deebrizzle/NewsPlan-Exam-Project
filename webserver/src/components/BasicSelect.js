import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function BasicSelect(arrayOfOptions, label) {
  const [option, setOption] = React.useState();

  const handleChange = (event) => {
    setOption(event.target.name);
  };

  const options = arrayOfOptions.map((option) => (
    <MenuItem key ={option.objectId} name ={option.name} value={option}>{option.name}</MenuItem>
  ))

  return (
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={option}
          label="Section"
          onChange={handleChange}>
          {options.length ? options : <MenuItem> No available entries. </MenuItem>}
        </Select>
      </FormControl>
  );
}

export default BasicSelect