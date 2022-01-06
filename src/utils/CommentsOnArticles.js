import { allCommentsToArticleResponsible} from "../database/Articles";
import { useEffect, useState} from "react";
import { getCurrentUser } from "../database/Users";
import { sortByDate } from "./sortBy";

export default function CommentsOnArticles() {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getCurrentUser().then((user) => {
        allCommentsToArticleResponsible(user.id).then((comments) => {
            setComments(comments);
          });
    }
    )
  }, []);

var allComments = [];
for (let i = 0; i < comments.length; i++) {
    const element = comments[i];
    if (element.length > 0){
        allComments = allComments.concat(comments[i]);
    } 
}

let listOfComments = allComments.map((row, index) => {
    return {
        id: index,
        updatedAt: row.updatedAt.substring(0, 10),
        message: row.message,
        article: row.article,
        headline: row.headline,
    };
  });
  
return sortByDate(listOfComments);
}


  