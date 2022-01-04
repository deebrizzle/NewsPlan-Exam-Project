import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import { useContext } from "react";
import { ModalContext } from "../ModalContext";
import { ContentContext } from "../ContentSchedule/ContentScheduleContext";

export function SelectDate({ handleCallbackDate, label }) {

  // TODO Frida and Emma, your contexts are doing the same things and overriding eachother here!
  const { date, setDate } = useContext(ModalContext);
  const { setContentDate} = useContext(ContentContext);

  //calendar is only set to the modal context - cannto use in ContentContext
  function formatDate(day) {
    const formattedDay = new Date(day.setHours(0,0,0,0));
    return formattedDay
  }
  const handleChange = (newDate) => {
    setDate(formatDate(newDate));
    //handleCallbackDate(formatDate(newDate))
    setContentDate(formatDate(newDate))
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
