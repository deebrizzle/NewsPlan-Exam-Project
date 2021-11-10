import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { StandardButton } from './StandardButton.styles';
import { SpacingWrapper } from './Spacing.styles';
import MaterialButton from './MaterialButton';
import {SaveButton} from '../components/Button.styles'

export default function SearchInput() {


  return (

      <TextField id="outlined-basic" label="Search" variant="outlined" fullWidth />

  );
}