import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import {ModalContext} from "./ModalContext";

export default function CalendarPopup({handleCallbackDate}) {
  const { date, setDate} = React.useContext(ModalContext);
  //Wed Dec 15 2021 00:00:00 GMT+0100 (Centraleuropæisk normaltid) this is day
  function formatDate(day) {
    const formattedDay = new Date(day.setHours(0,0,0,0));
    console.log(day + " this is day")
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