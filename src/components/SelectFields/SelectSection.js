import BasicSelect from "./BasicSelect";
import React, { useContext, useEffect, useState } from "react";
import { getSections, getSection} from "../../database/Sections";
import { ModalContext } from "../ModalContext";

export function SelectSection({section}) {
  const {setSectionObject, setSection} =
    useContext(ModalContext);
  //TODO Query sections from the database for scaleability?
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
        console.log(sectionObject)
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