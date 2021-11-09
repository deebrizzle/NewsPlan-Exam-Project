import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {SpacingWrapper} from "./Spacing.styles"

//this component could be made more genereric with props for type of input
const options = ["Financial", "Sports", "Foreign affairs", "Motor"]

function BasicSelect() {
  const [section, setSection] = React.useState('');

  const handleChange = (event) => {
    setSection(event.target.value);
  };

  return (
    <SpacingWrapper>
    <Box sx={{ minWidth: 250 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Section</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={section}
          label="Section"
          onChange={handleChange}>
          {options.map((option) =>(
            <MenuItem value={option}>{option}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
    </SpacingWrapper>
  );
}

export default BasicSelect