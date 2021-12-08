import Parse from "parse";

//TODO: Figure out function to fetch articles within next 24 hours? 7 days?
export async function getFinishedArticles(date) {
  const Articles = Parse.Object.extend("Articles");
  const query = new Parse.Query(Articles);
  query.equalTo("status", "F");
  query.include("responsible");
  query.include(["idea.section"]);
  const dateStart = new Date(date.setHours(0, 0, 0, 0))
  const dateEnd = new Date(date.setHours(23, 59, 59, 59))
  query.greaterThanOrEqualTo("publishDate", dateStart);
  query.lessThanOrEqualTo("publishDate", dateEnd);
  return await query.find();
  

}

export async function getUnfinishedArticles(date) {
  const Articles = Parse.Object.extend("Articles");
  const query = new Parse.Query(Articles);
  query.include("responsible");
  query.notEqualTo("status", "F");
  query.include(["idea.section"])
  const dateStart = new Date(date.setHours(0, 0, 0, 0))
  const dateEnd = new Date(date.setHours(23, 59, 59, 59))
  query.greaterThanOrEqualTo("publishDate", dateStart);
  query.lessThanOrEqualTo("publishDate", dateEnd);
  return query.find();
  
}

//TODO Sort all articles by user (ascending)

export async function getAllArticles(date) {
  const Articles = Parse.Object.extend("Articles");
  const query = new Parse.Query(Articles);
  query.include("responsible");
  query.include("Idea");
  query.include("Section");
  query.lessThanOrEqualTo("publishDate", date);
  return await query.find();
}

export function mapArticles(articles) {
  const articlesInfo = articles.map((article) => {
    return {
      articleId: article.get("objectId"),
      ideaId: article.get("idea"),
      headline: article.get("headline"),
      status: article.get("status"),
      publishDate: article.get("publishDate"),
      username: article.get("responsible").get("username"),
    };
  });

  return articlesInfo;
}

export async function getArticleById(id) {
<<<<<<< HEAD
    const Articles = Parse.Object.extend("Articles");
    const query = new Parse.Query(Articles);
    query.get(id).then((article) => {
        return article
    }
    )
  }
=======
  const Articles = Parse.Object.extend("Articles");
  const query = new Parse.Query(Articles);
  query.get(id).then((article) => {
      return article
  }
<<<<<<< HEAD

  export async function getArticlesFromIdea(ideaObject) {
    const Articles = Parse.Object.extend("Articles");
    const query = new Parse.Query(Articles);
    query.include("Idea")
    query.equalTo("idea", ideaObject);
    query.ascending("publishDate");
    return await query.find();
  }
=======
  )
}
>>>>>>> 5c1af00eaf8e9d806d906f28cd1046249aaeb5d5
>>>>>>> b87bd165c9463fc406ead13240e6fb78efaac098
