import { useEffect, useState } from "react";
import { getArticleById } from "../database/Articles";

export default function Article({ url }) {
  const [article, setArticle] = useState("");
  console.log(url);

  //TODO: make sure that it is the right part of the path
  const theId = url.substring(url.lastIndexOf("/") + 1);
  console.log(theId);
  useEffect(() => {
    console.log(theId);
    getArticleById(theId).then((articleinfo) => {
      setArticle(articleinfo);
    });
  }, [theId]);
  console.log(article);

  if (article === undefined) {
    return <p>Loading...</p>;
  } 
    return (
      <>
        <h1>Article page</h1>
      </>
    );
}
