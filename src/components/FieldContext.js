import React, { useState, createContext} from "react";

export const FieldContext = createContext();

export const FieldProvider = ({ children }) => {
  const [idea, setIdea] = useState("");
  const [headline, setHeadline] = useState("")
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
  const [assistant, setAssistant] = useState("");
  const [assistantObject, setAssistantObject] = useState("")
  const [photographer, setPhotographer] = useState("")
  const [status, setStatus] = useState("");
  const [workload, setWorkload] = useState();

  const resetContext = () => {
    setDate(new Date())
    setSection('')
    setIdeaSource('')
    setIdea('')
    setDescription('')
    setVisibility('')
    setIdeaId('')
    setHeadline('');
    setAssistant('')
    setPhotographer('')
    setStatus('')
    setWorkload();
  };

  return (
    <FieldContext.Provider
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
        headline,
        setHeadline,
        assistant,
        setAssistant,
        photographer,
        setPhotographer,
        status,
        setStatus,
        description,
        setDescription,
        date,
        setDate,
        articles,
        setArticles,
        workload,
        setWorkload,
        sectionObject,
        setSectionObject,
        ideaSourceObject,
        setIdeaSourceObject,
        assistantObject,
        setAssistantObject
      }}
    >
      {children}
    </FieldContext.Provider>
  );
};
