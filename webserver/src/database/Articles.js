import Parse from "parse";

//TODO: Figure out function to fetch articles within next 24 hours? 7 days?
export async function getFinishedArticles(date) {
  const Articles = Parse.Object.extend("Articles");
  const query = new Parse.Query(Articles);
  query.include("responsible");
  query.equalTo("status", "F");
  query.include("Idea");
  query.include("Section");
  query.lessThanOrEqualTo("publishDate", date);
  query.ascending("publishDate");
  return await query.find();
}

export async function getUnfinishedArticles(date) {
  const Articles = Parse.Object.extend("Articles");
  const query = new Parse.Query(Articles);
  query.include("responsible");
  query.notEqualTo("status", "F");
  query.include("Idea");
  query.include("Section");
  query.lessThanOrEqualTo("publishDate", date);
  query.ascending("publishDate");
  return await query.find();
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
