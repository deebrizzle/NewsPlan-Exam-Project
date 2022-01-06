import BasicSelect from "./BasicSelect";
import React, { useContext } from "react";
import {FieldContext} from "../FieldContext"

export function SelectVisibilities() {
    const { visibility, setVisibility } = useContext(FieldContext);
  
    const handleChange = (event) => {
      setVisibility(event.target.value);
    };
  
    const visibilities = [
      { objectId: "v1", name: "Only myself" },
      { objectId: "v2", name: "Chief Editor" },
      { objectId: "v3", name: "Section Staff" },
      { objectId: "v4", name: "Everyone" },
    ];
  
    return (
      <BasicSelect
        label="Visibility"
        handleChange={handleChange}
        value={visibility}
        arrayOfOptions={visibilities}
      />
    );
  }