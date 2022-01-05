import BasicSelect from "./BasicSelect";
import React, { useContext, useEffect, useState } from "react";
import { getUsers, getUser } from "../../database/Users";
import { ModalContext } from "../ModalContext";
import { ContentContext } from "../ContentSchedule/ContentScheduleContext";

export function SelectSource({ handleCallBackSelection, label}) {
    const { setIdeaSource, ideaSource, setIdeaSourceObject } =
      useContext(ModalContext);
  
    const {setSourceContent} = useContext(ContentContext);
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      getUsers().then((users) => {
        setUsers(users);
      });
    }, []);
  
    //TODO Error handling console.logs? Delete?
  
    const handleChange = async (event) => {
      setIdeaSource(event.target.value);
      setSourceContent(event.target.value);
      //handleCallBackSelection(ideaSource);
      getUser(event.target.value)
        .then((results) => {
          results.forEach((userObject) => {
            setIdeaSourceObject(userObject);
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };
  
    const sources = users.map((employee) => {
      return {
        objectId: employee.id,
        name: employee.get("username"),
        section: employee.get("section"),
      };
    });
  
    return (
      <BasicSelect
        handleChange={handleChange}
        value={ideaSource}
        arrayOfOptions={sources}
        label={label}
        handleCallBackSelection={handleCallBackSelection}
      />
    );
  }