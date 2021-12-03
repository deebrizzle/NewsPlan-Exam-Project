import Parse from "parse";

//TODO: Figure out function to fetch articles within next 24 hours? 7 days?
export async function getFinishedArticles(date, section) {


  const Ideas = Parse.Object.extend("Ideas");
  const ideasQuery = new Parse.Query(Ideas);
  ideasQuery.include("section");
  ideasQuery.equalTo("section.name", section);
  const ideass = await ideasQuery.first()

  const Articles = Parse.Object.extend("Articles");
  const articlesQuery = new Parse.Query(Articles);
  articlesQuery.equalTo("status", "F");
  articlesQuery.include("responsible");
  articlesQuery.equalTo("idea", ideass)
  const dateStart = new Date(date.setHours(0, 0, 0, 0))
  const dateEnd = new Date(date.setHours(23, 59, 59, 59))
  articlesQuery.greaterThanOrEqualTo("publishDate", dateStart);
  articlesQuery.lessThanOrEqualTo("publishDate", dateEnd);

  return await articlesQuery.find()

}

export async function getUnfinishedArticles(date) {
  const Articles = Parse.Object.extend("Articles");
  const query = new Parse.Query(Articles);
  query.include("responsible");
  query.notEqualTo("status", "F");
  //query.include("idea");
  const dateStart = new Date(date.setHours(0, 0, 0, 0))
  const dateEnd = new Date(date.setHours(23, 59, 59, 59))
  query.greaterThanOrEqualTo("publishDate", dateStart);
  query.lessThanOrEqualTo("publishDate", dateEnd);
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

export async function getArticleById(id) {
  const Articles = Parse.Object.extend("Articles");
  const query = new Parse.Query(Articles);
  query.get(id).then((article) => {
      return article
  }
  )
}
