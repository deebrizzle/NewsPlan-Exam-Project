import BasicSelect from "./BasicSelect";
import React, { useEffect, useState } from "react";
import { getPhotographers } from "../../database/Users";

export function SelectPhotographer({label}) {
    const [photographer, setPhotographer] = useState();
    const [photographers, setPhotographers] = useState([]);
  
    useEffect(() => {
      getPhotographers().then((photographers) => {
        setPhotographers(photographers);
      });
    }, []);
    
    const handleChange = async (event) => {
      setPhotographer(event.target.value);
    };
  
    const options = photographers.map((employee) => {
      return {
        objectId: employee.id,
        name: employee.get("username"),
        section: employee.get("section"),
      };
    });

    return (
      <BasicSelect
        handleChange={handleChange}
        value={photographer}
        arrayOfOptions={options}
        label={label}
      />
    );
  }