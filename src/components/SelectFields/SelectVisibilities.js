import BasicSelect from "./BasicSelect";
import React, { useContext } from "react";
import { ModalContext } from "../ModalContext";

export function SelectVisibilities({ handleCallBackSelection }) {
    const { visibility, setVisibility } = useContext(ModalContext);
  
    const handleChange = (event) => {
      setVisibility(event.target.value);
      //handleCallBackSelection(visibility);
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
        handleCallBackSelection={handleCallBackSelection}
      />
    );
  }