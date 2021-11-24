import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';

export default function CalendarPopup({handleCallbackDate}) {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  
  const [value, setValue] = React.useState(date);

  function formatDate(day) {
    const formattedDay = new Date(day.setHours(0,0,0,0));
    return formattedDay
  }

  const handleChange = (newValue) => {
    setValue(formatDate(newValue));
    console.log(formatDate(newValue))
    console.log(value)
    handleCallbackDate(formatDate(newValue))
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