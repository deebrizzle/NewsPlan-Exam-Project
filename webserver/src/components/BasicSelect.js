import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";

export default function BasicSelect({
  arrayOfOptions,
  label,
  handleCallBackSelection,
}) {
  const [option, setOption] = useState("");

  const handleChange = (event) => {
    setOption(event.target.value);
    handleCallBackSelection(event.target.value);
  };

  const options = arrayOfOptions.map((option) => (
    <MenuItem key={option.objectId} name={option.name} value={option}>
      {option.name}
    </MenuItem>
  ));

  return (
      <FormControl fullWidth>
        <InputLabel id={label}>{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={option}
          label={label}
          onChange={handleChange}>
          {options.length ? options : <MenuItem> No available entries. </MenuItem>}
        </Select>
      </FormControl>
  );
}
