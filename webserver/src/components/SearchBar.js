import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { StandardButton } from './StandardButton.styles';
import { SpacingWrapper } from './Spacing.styles';
import MaterialButton from './MaterialButton';

export default function SearchInput() {
  return (
    <SpacingWrapper>
    <Box 
        component="form"
        sx={{'& > :not(style)': { width: '25ch' },}}
        noValidate
        autoComplete="off"
      >
      <TextField id="outlined-basic" label="Search" variant="outlined" />
      <StandardButton 
            type="submit"
            fullWidth
            variant="text"
            
          >
            Search
          </StandardButton>
    </Box>
    </SpacingWrapper>
  );
}