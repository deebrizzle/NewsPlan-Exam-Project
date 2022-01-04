import React, { useState, createContext } from "react";

export const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
  const dateObj = new Date();
  const currDate = `${dateObj.getMonth()+1}, ${dateObj.getDate()}, ${dateObj.getFullYear()} 00:00:00`;

  const [finishedArticles, setFinishedArticles] = useState();
  const [unfinishedArticles, setUnfinishedArticles] = useState();
  const [allArticles, setAllArticles] = useState();
  //TODO: another solution to set the date before exam. We just need to make sure that some articles are displayed
  const [contentDate, setContentDate] = useState(new Date(currDate));
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
