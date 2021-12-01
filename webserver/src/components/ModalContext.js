import React, { useState } from "react";
import { uploadIdea } from "../database/Ideas";
export const ModalContext = React.createContext();

export const ModalProvider = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  const [modalShow, setModalShow] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [idea, setIdea] = React.useState();
  const [description, setDescription] = React.useState();
  const [visibility, setVisibility] = React.useState();
  const [expirationDate, setExpirationDate] = React.useState("Apr 11 2022");
  const [section, setSection] = React.useState();
  const [ideaSource, setIdeaSource] = React.useState();


  const dateObj = new Date();
  const currDate = `${dateObj.getMonth()+1} ${dateObj.getDate()}, ${dateObj.getFullYear()} 00:00:00`;
  const [date, setDate] = React.useState(currDate);


  const [newIdea, setNewIdea] = React.useState({
    ideaName: idea,
    description: description,
    visibility: visibility,
    expirationDate: expirationDate,
    section: section,
    ideaSource: ideaSource,
  });

  const handleCallBack = () => {};
  async function handleSave() {
    if (Object.values(newIdea).every((x) => x === null || x === "")) {
      alert("Please fill out every field to save your idea.");
    } else {
      await uploadIdea(newIdea);
      handleClose();
    }
  }

  return (
    <ModalContext.Provider
      value={{
        open,
        setOpen,
        modalShow,
        setModalShow,
        handleOpen,
        handleSave,
        handleClose,
        handleCallBack,
        newIdea,
        setNewIdea,
        ideaSource,
        setIdeaSource,
        visibility,
        setVisibility,
        expirationDate,
        setExpirationDate,
        section,
        setSection,
        idea,
        setIdea,
        description,
        setDescription,
        date,
        setDate,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
