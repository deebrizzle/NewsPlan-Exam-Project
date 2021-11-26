import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';

export default function CalendarPopup({handleCallbackDate}) {
  const dateObj = new Date();
  const currDate = `${dateObj.getMonth()+1} ${dateObj.getDate()}, ${dateObj.getFullYear()} 00:00:00`;
  
  const [date, setDate] = React.useState(currDate);

  function formatDate(day) {
    const formattedDay = new Date(day.setHours(0,0,0,0));
    return formattedDay
  }

  const handleChange = (newDate) => {
    setDate(formatDate(newDate));
    console.log(formatDate(newDate))
    console.log(newDate)
    handleCallbackDate(formatDate(newDate))
  };


  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label="Lifetime"
          inputFormat="MM/dd/yyyy"
          value={date}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} fullWidth/>}
        />
    </LocalizationProvider>
  );
}