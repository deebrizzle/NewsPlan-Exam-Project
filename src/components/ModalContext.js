import React, { useState, createContext} from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const dateObj = new Date();
  const currDate = `${dateObj.getMonth()+1}, ${dateObj.getDate()}, ${dateObj.getFullYear()} 00:00:00`;
  const [open, setOpen] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => {
    setIdea('')
    setDescription('')
    setVisibility('')
    setDate(currDate)
    setSection('')
    setIdeaSource('')
    setIdeaId('')
    setOpen(true)
  };

  const [idea, setIdea] = useState("");
  const [description, setDescription] = useState("");
  const [visibility, setVisibility] = useState("");
  const [section, setSection] = useState("");
  const [ideaSource, setIdeaSource] = useState("");
  const [ideaId, setIdeaId] = useState("");
  const [date, setDate] = useState(currDate);
  const [ideaSourceObject, setIdeaSourceObject] = useState([]);
  const [sectionObject, setSectionObject] = useState([]);
  const [listOfIdeas, setListOfIdeas] = useState([]);

  const handleCallBack = () => {};

  return (
    <ModalContext.Provider
      value={{
        listOfIdeas,
        setListOfIdeas,
        open,
        setOpen,
        modalShow,
        setModalShow,
        handleOpen,
        handleClose,
        handleCallBack,
        ideaId,
        setIdeaId,
        ideaSource,
        setIdeaSource,
        visibility,
        setVisibility,
        section,
        setSection,
        idea,
        setIdea,
        description,
        setDescription,
        date,
        setDate,
        sectionObject,
        setSectionObject,
        ideaSourceObject,
        setIdeaSourceObject,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};