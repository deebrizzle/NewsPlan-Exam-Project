import React, { useState } from "react";

export const ContentContext = React.createContext();

export const ContentProvider = ({ children }) => {
  const dateObj = new Date();

  const [finishedArticles, setFinishedArticles] = React.useState();
  const [unfinishedArticles, setUnfinishedArticles] = React.useState();
  //TODO: another solution to set the date before exam. We just need to make sure that some articles are displayed
  const [contentDate, setContentDate] = useState(new Date(2021, 10, 26, 0, 0, 0, 0));
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
