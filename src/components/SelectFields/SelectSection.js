import BasicSelect from "./BasicSelect";
import React, { useContext, useEffect, useState } from "react";
import { getSections, getSection} from "../../database/sections";
import {FieldContext} from "../FieldContext"

export function SelectSection() {
  const {setSectionObject, setSection, section} =useContext(FieldContext);
  const [sections, setSections] = useState([]);

  useEffect(() => {
    getSections().then((sections) => {
      setSections(sections);
    });
  }, []);

  const handleChange = async (event) => {
    setSection(event.target.value);
    getSection(event.target.value)
    .then((results) => {
      results.forEach((sectionObject) => {
        setSectionObject(sectionObject);
      });
    })
    .catch((error) => {
      console.log(error);
    });
  };

  const sectionObjects = sections.map((section) => {
    return {
      objectId: section.id,
      name: section.get("name"),
      editor: section.get("Editor"),
    };
  });

  
  return (
    <BasicSelect
      handleChange={handleChange}
      value={section}
      arrayOfOptions={sectionObjects}
      label="Section"
    />
  );
}