import BasicSelect from "./BasicSelect";
import {getArticlesFromIdea} from "../../database/Articles"
import React, { useContext, useEffect, useState } from "react";
import {FieldContext} from "../FieldContext"

export function SelectArticles() {
  const [articlesFromIdea, setArticlesFromIdea] = useState([]);
  const {ideaId} = useContext(FieldContext);

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