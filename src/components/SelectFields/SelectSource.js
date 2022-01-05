import BasicSelect from "./BasicSelect";
import React, { useContext, useEffect, useState } from "react";
import { getUsers, getUser } from "../../database/Users";
import { ModalContext } from "../ModalContext";

export function SelectSource() {
    const { setIdeaSource, ideaSource, setIdeaSourceObject } =
      useContext(ModalContext);
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      getUsers().then((users) => {
        setUsers(users);
      });
    }, []);
  
    const handleChange = async (event) => {
      setIdeaSource(event.target.value);
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
        label="Source"
      />
    );
  }