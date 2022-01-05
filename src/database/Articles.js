import Parse from "parse";
import { sortByString } from "../utils/sortBy";
import {convertToDayMonthString} from "../components/convertDate"
import {getCommentsFromArticle} from "./Comments"

export async function getAllArticles(date) {
  const Articles = Parse.Object.extend("Articles");
  const query = new Parse.Query(Articles);
  query.include("responsible");
  query.include("Idea");
  query.include("Section");
  query.lessThanOrEqualTo("publishDate", date);
  return await query.find();
}


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

export function mapArticles(articles) {
  const articlesInfo = articles.map((article) => {
    return {
      objectId: article.id,
      ideaId: article.get("idea"),
      headline: article.get("headline"),
      status: article.get("status"),
      publishDate: article.get("publishDate"),
      dayMonthDate: convertToDayMonthString(article.get("publishDate").toString()),
      username: article.get("responsible").get("username"),
    };
  });

  return sortByString(articlesInfo, "username");
}

export async function getArticleById(id) {
    const Articles = Parse.Object.extend("Articles");
    const query = new Parse.Query(Articles);
    query.include("responsible");
    query.include("Idea");
    query.include("Section");
    query.equalTo("objectId", id);
    return await query.find();
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

export async function getAllArticlesByResponsible(userId) {
  const Articles = Parse.Object.extend("Articles");
  const query = new Parse.Query(Articles);
  const results = await query.find();
  let articles = results.map((row, index) => {
    return {
      id: index,
      createdAt: row.createdAt,
      objectId: row.id,
      responsible: row.attributes.responsible.id,
      headline: row.attributes.headline,
    };
  });
  const filtered = articles.filter(e => e.responsible === userId);
  return filtered
}

export async function allCommentsToArticleResponsible(userId){
const allArticles = await getAllArticlesByResponsible(userId);
let commentsForResponsible = [];
for (let index = 0; index < allArticles.length; index++) {
  const articleId = allArticles[index].objectId;
  const headline = allArticles[index].headline
  const commentsOnArticle = await getCommentsFromArticle(articleId)
  commentsOnArticle.forEach(element => {
    element.headline = headline
  });
  commentsForResponsible.push(commentsOnArticle);
}
return commentsForResponsible
}
//cloud
export async function workLoadSummarizer(usernameString, dateObj) {
  const params =  { initials: usernameString, date: dateObj };
  const sum = await Parse.Cloud.run("workloadForOne", params);
  return sum;
}
