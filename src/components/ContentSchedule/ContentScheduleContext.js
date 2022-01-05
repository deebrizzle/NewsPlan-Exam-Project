import React, { useState, createContext } from "react";

export const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
  const dateObj = new Date();
  //TODO Currently invalid Date object
  const currDate = `${dateObj.getMonth()+1}, ${dateObj.getDate()}, ${dateObj.getFullYear()} 00:00:00`;

  const [finishedArticles, setFinishedArticles] = useState();
  const [unfinishedArticles, setUnfinishedArticles] = useState();
  const [allArticles, setAllArticles] = useState();
  const [contentDate, setContentDate] = useState(currDate);
  const [sectionContent, setSectionContent] = useState();
  const [sourceContent, setSourceContent] = useState();

  const handleCallBack = () => {};

  return (
    <ContentContext.Provider
      value={{
        finishedArticles,
        setFinishedArticles, 
        unfinishedArticles,
        setUnfinishedArticles,
        allArticles,
        setAllArticles,
        contentDate, 
        setContentDate,
        sectionContent,
        setSectionContent,
        sourceContent,
        setSourceContent,
        handleCallBack
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};
