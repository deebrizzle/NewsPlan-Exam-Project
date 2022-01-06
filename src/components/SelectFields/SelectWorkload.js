import BasicSelect from "./BasicSelect";
import React, { useContext } from "react";
import {ModalContext} from '../ModalContext'
import { fullDaySquare, halfDaySquare, quarterDaySquare } from "./SelectWorkload.styles";

export function SelectWorkload() {
    const {workload, setWorkload} = useContext(ModalContext);
  
    const handleChange = (event) => {
        setWorkload(event.target.value);
    };
  
    const workloads = [
      { objectId: "w1", name: "1/4 working day", src: fullDaySquare },
      { objectId: "w2", name: "1/2 working day", src: halfDaySquare },
      { objectId: "w3", name: "Full Day", src: quarterDaySquare},
    ];
  
    return (
      <BasicSelect
        label="Workload"
        handleChange={handleChange}
        value={workload}
        arrayOfOptions={workloads}
      />
    );
  }