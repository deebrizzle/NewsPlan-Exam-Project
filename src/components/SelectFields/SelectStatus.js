import BasicSelect from "./BasicSelect";
import React, { useContext } from "react";
import {FieldContext} from "../FieldContext"

export function SelectStatus() {
    const {status, setStatus} = useContext(FieldContext);
  
    const handleChange = (event) => {
        setStatus(event.target.value);
    };
  
    const statuses = [
      { objectId: "s1", name: "Accepted" },
      { objectId: "s2", name: "Cancelled" },
      { objectId: "s3", name: "Delayed" },
      { objectId: "s4", name: "Finished" },
      { objectId: "s5", name: "Planned" }
    ];
  
    return (
      <BasicSelect
        label="Status"
        handleChange={handleChange}
        value={status}
        arrayOfOptions={statuses}
      />
    );
  }