import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import { useContext } from "react";
import { ModalContext } from "../ModalContext";

export function SelectDate({label }) {
  const { date, setDate } = useContext(ModalContext);

  function formatDate(day) {
    const formattedDay = new Date(day.setHours(0,0,0,0));
    return formattedDay
  }
  const handleChange = (newDate) => {
    setDate(newDate);
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
