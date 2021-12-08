import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect(props) {
  let array = props.arrayOfOptions
if (!Array.isArray(array)){
  array = [array]
}
  const options = array.map((option) => (
    <MenuItem key ={option.objectId} name ={option.name} value={option.name}>{option.name}</MenuItem>
  ))
  
  return (
      <FormControl fullWidth>
        <InputLabel id={props.label}>{props.label}</InputLabel>
        <Select
          labelId={props.label}
          id={props.label}
          value={props.value}
          label={props.label}
          onChange={props.handleChange}
          >
               {options.length ? options : <MenuItem> No available entries. </MenuItem>}
        </Select>
      </FormControl>
  );
}

