import React, { useState } from "react";

export const ContentContext = React.createContext();

export const ContentProvider = ({ children }) => {
  const dateObj = new Date();

  const [finishedArticles, setFinishedArticles] = React.useState();
  const [unfinishedArticles, setUnfinishedArticles] = React.useState();
  const [contentDate, setContentDate] = useState(new Date(2021, 10, 26, 0, 0, 0, 0));
  const [sectionContent, setSectionContent] = useState();
  const [source, setSource] = useState();

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
        source,
        setSource,
        handleCallBack
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};
