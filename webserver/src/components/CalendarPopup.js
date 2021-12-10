import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import { useState, useContext } from "react";
import { ModalContext } from "./ModalContext";
import { ContentContext } from "./ContentScheduleContext";

export default function CalendarPopup({ handleCallbackDate, label }) {
  //TODO Ask Bjørn what he means by comment:
  //Line 8 and 9 will run every time state updates, even if the resulting const date is not used.
  //You are unlikely to run into any problems doing it like this, but as an exercise to understand React components and general clean code,
  //you might consider putting it all inside the initial value. No shame in that.
  const { date, setDate } = useContext(ModalContext);
  const { contentDate, setContentDate} = useContext(ContentContext);
  //calendar is only set to the modal context - cannto use in ContentContext
  function formatDate(day) {
    const formattedDay = new Date(day.setHours(0,0,0,0));
    return formattedDay
  }
  const handleChange = (newDate) => {
    setDate(formatDate(newDate));
    //handleCallbackDate(formatDate(newDate))
    setContentDate(newDate)
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
        label={label}
        inputFormat="MM/dd/yyyy"
        value={date}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} fullWidth />}
      />
    </LocalizationProvider>
  );
}
