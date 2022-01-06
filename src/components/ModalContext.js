import React, { useState, createContext} from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [idea, setIdea] = useState("");
  const [description, setDescription] = useState("");
  const [visibility, setVisibility] = useState("");
  const [section, setSection] = useState("");
  const [ideaSource, setIdeaSource] = useState("");
  const [ideaId, setIdeaId] = useState("");
  const [date, setDate] = useState(new Date());
  const [articles, setArticles] = useState("")
  const [ideaSourceObject, setIdeaSourceObject] = useState([]);
  const [sectionObject, setSectionObject] = useState([]);
  const [listOfIdeas, setListOfIdeas] = useState([]);

  const resetContext = () => {
    setDate(new Date())
    setSection('')
    setIdeaSource('')
    setIdea('')
    setDescription('')
    setVisibility('')
    setIdeaId('')
  };

  return (
    <ModalContext.Provider
      value={{
        resetContext,
        listOfIdeas,
        setListOfIdeas,
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
        articles,
        setArticles,
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
