import BasicSelect from "./BasicSelect";
import {getArticlesFromIdea} from "../../database/Articles"
import React, { useContext, useEffect, useState } from "react";
import { ModalContext } from "../ModalContext";

export function SelectArticles() {
  const [articlesFromIdea, setArticlesFromIdea] = useState([]);
  const {ideaId} = useContext(ModalContext);

  useEffect(() => {
      getArticlesFromIdea(ideaId).then((articles) => {
        setArticlesFromIdea(articles);
    });
  }, []);

  const articleObjects = articlesFromIdea.map((article) => {
    return {
      objectId: article.id,
      name: article.get("headline"),
    };
  });

    return (
      <BasicSelect
        label="Articles"
        value={""}
        arrayOfOptions={articleObjects}
      />
    );
  }