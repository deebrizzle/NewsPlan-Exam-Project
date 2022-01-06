import BasicSelect from "./BasicSelect";
import React, { useContext, useEffect, useState } from "react";
import { getUsers, getUser } from "../../database/users";
import {FieldContext} from "../FieldContext"

export function SelectAssistant({label}) {
    const { setAssistant, assistant, setAssistantObject } = useContext(FieldContext);
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      getUsers().then((users) => {
        setUsers(users);
      });
    }, []);
  
    const handleChange = async (event) => {
      setAssistant(event.target.value);
      getUser(event.target.value)
        .then((results) => {
          results.forEach((userObject) => {
            setAssistantObject(userObject);
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
        value={assistant}
        arrayOfOptions={sources}
        label={label}
      />
    );
  }