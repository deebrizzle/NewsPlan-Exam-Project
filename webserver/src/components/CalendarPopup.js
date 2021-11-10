import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { SpacingWrapper } from './Spacing.styles';
import DatePicker from '@mui/lab/DatePicker';

export function CalendarPopup() {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  
  const [value, setValue] = React.useState(date);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label="Lifetime"
          inputFormat="MM/dd/yyyy"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} fullWidth/>}
        />
    </LocalizationProvider>
  );
}

export function ChooseDate() {
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
