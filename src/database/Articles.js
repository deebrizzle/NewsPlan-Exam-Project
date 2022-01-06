import Parse from "parse";
import { sortByString } from "../utils/sortBy";
import {convertToDayMonthString, convertStringDateToDateObject} from "../utils/convertDate"
import {getCommentsFromArticle} from "./comments"

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
  date = convertStringDateToDateObject(date)
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
  date = convertStringDateToDateObject(date)
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

  export async function getArticlesFromIdea(ideaId) {
    const Articles = Parse.Object.extend("Articles");
    const query = new Parse.Query(Articles);
    query.include("Ideas")
    query.ascending("publishDate");
    query.equalTo('idea', { "__type": "Pointer", "className": "Ideas", "objectId": ideaId });
    const results = await query.find();
    return results;
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

//cloud
export async function workLoadSummarizer(usernameString, dateObj) {
  const params =  { initials: usernameString, date: dateObj };
  const sum = await Parse.Cloud.run("workloadForOne", params);
  return sum;
}

// cloud
export function createUserWorkloadArray(users, date) {
  var userWorkloadArray = []
  users.forEach((user) => userWorkloadArray.push({   
      objectId: user.get("userID"),
      name: user.get("username"), 
      section: user.get("section"),
      photographer: user.get("isPhotographer"),
      workload: 0
  }))
  userWorkloadArray.forEach((row) => 
      workLoadSummarizer(row.name, date).then((sum) => {
          row.workload = sum;
      }))
  return userWorkloadArray
}

export function articleFilterSectionBySource(articles, source) {
  if (source === undefined || articles === undefined) {
    return articles;
  } else {
    const filtered = articles.filter(
      (article) => article.attributes.responsible.attributes.username === source
    );
    console.log(filtered)
    return filtered;
  }
}

export async function uploadArticleToDatabase(idea, headline, responsibleObject, photographer, assistant, workload, status, date ) {
  let formattedDate = convertStringDateToDateObject(date);
  let Article = Parse.Object.extend("Articles");
  let newArticle = new Article();
  newArticle.set("idea", idea);
  newArticle.set("headline", headline);
  newArticle.set("responsible", responsibleObject);
  if (photographer === "") newArticle.set("photographer", null); else { newArticle.set("photographer", photographer); }
  if (assistant === "") newArticle.set("assistant", null); else { newArticle.set("assistant", assistant); }
  newArticle.set("workload", workload)
  newArticle.set("status", status)
  newArticle.set("publishDate", formattedDate);
  try {
    await newArticle.save();
    alert("success");
    return true;
  } catch (error) {
    alert(error);
    return false;
  }
}

