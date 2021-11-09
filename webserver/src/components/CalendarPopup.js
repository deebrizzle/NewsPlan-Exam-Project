import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { SpacingWrapper } from './Spacing.styles';
import DatePicker from '@mui/lab/DatePicker';

function ChooseDate() {
  const [value, setValue] = React.useState(null);

  return (
      <SpacingWrapper>
      <DatePicker
        label="Choose interval"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
      </SpacingWrapper>
  );
}
export default ChooseDate;