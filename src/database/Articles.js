import Parse from "parse";
import { sortByString } from "../utils/sortBy";

//TODO: Figure out function to fetch articles within next 24 hours? 7 days?
export async function getFinishedArticles(date, setFinishedArticles) {
  const Articles = Parse.Object.extend("Articles");
  const query = new Parse.Query(Articles);
  query.equalTo("status", "F");
  query.include("responsible");
  query.include(["idea.section"]);
  const dateStart = new Date(date.setHours(0, 0, 0, 0))
  const dateEnd = new Date(date.setHours(23, 59, 59, 59))
  query.greaterThanOrEqualTo("publishDate", dateStart);
  query.lessThanOrEqualTo("publishDate", dateEnd);
  query.find().then((finishedArticles) => {
    setFinishedArticles(mapArticles(finishedArticles))
  })
}

export async function getUnfinishedArticles(date, setUnfinishedArticles) {
  const Articles = Parse.Object.extend("Articles");
  const query = new Parse.Query(Articles);
  query.include("responsible");
  query.notEqualTo("status", "F");
  query.include(["idea.section"]);
  const dateStart = new Date(date.setHours(0, 0, 0, 0));
  const dateEnd = new Date(date.setHours(23, 59, 59, 59));
  query.greaterThanOrEqualTo("publishDate", dateStart);
  query.lessThanOrEqualTo("publishDate", dateEnd);
  query.find().then((unfinishedArticles) => {
    setUnfinishedArticles(mapArticles(unfinishedArticles))
  })
}

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
      objectId: article.id,
      ideaId: article.get("idea"),
      headline: article.get("headline"),
      status: article.get("status"),
      publishDate: article.get("publishDate"),
      username: article.get("responsible").get("username"),
    };
  });

  return sortByString(articlesInfo, "username");
}

export async function getArticleById(id) {
    const Articles = Parse.Object.extend("Articles");
    const query = new Parse.Query(Articles);
    query.get(id).then((article) => {
        return article
    }
    )
  }

  export async function getArticlesFromIdea(ideaObject) {
    const Articles = Parse.Object.extend("Articles");
    const query = new Parse.Query(Articles);
    query.include("Idea")
    query.equalTo("idea", ideaObject);
    query.ascending("publishDate");
    return await query.find();
  }

export function articleFilterSection(articles, section) {
  if (section === undefined) {
    return articles;
  } else {
    const filtered = articles.filter(
      (article) => article.get("idea").get("section").get("name") === section
    );
    return filtered;
  }
}

export function articleFilterSource(articles, source) {
  if (source === undefined) {
    return articles;
  } else {
    const filtered = articles.filter(
      (article) => article.get("responsible").get("username") === source
    );
    return filtered;
  }
}
