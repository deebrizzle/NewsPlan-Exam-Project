import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import { useState } from "react";

export default function CalendarPopup({ handleCallbackDate }) {
  //TODO Ask Bjørn what he means by comment:
  //Line 8 and 9 will run every time state updates, even if the resulting const date is not used.
  //You are unlikely to run into any problems doing it like this, but as an exercise to understand React components and general clean code,
  //you might consider putting it all inside the initial value. No shame in that.

  const dateObj = new Date();
  const currDate = new Date(2021, 10, 17, 0, 0, 0, 0);

  const [date, setDate] = useState(currDate);

  const handleChange = (newDate) => {
    setDate(newDate);
    handleCallbackDate(newDate);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
        label="Lifetime"
        inputFormat="MM/dd/yyyy"
        value={date}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} fullWidth />}
      />
    </LocalizationProvider>
  );
}
