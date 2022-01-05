import React, { useState, createContext } from "react";

export const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
  const [finishedArticles, setFinishedArticles] = useState();
  const [unfinishedArticles, setUnfinishedArticles] = useState();
  const [allArticles, setAllArticles] = useState();
  const [contentDate, setContentDate] = useState(new Date());
  const [sectionContent, setSectionContent] = useState();
  const [sourceContent, setSourceContent] = useState();

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
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};
