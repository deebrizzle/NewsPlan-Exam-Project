import Parse from "parse";

//TODO: Figure out function to fetch articles within next 24 hours? 7 days?
export async function getFinishedArticles(date, section) {
    const Articles = Parse.Object.extend("Articles");
    const query = new Parse.Query(Articles);
    query.include("responsible")
    query.equalTo("status", "F");
    query.include("idea")
    query.include("objectId")
    query.lessThanOrEqualTo("publishDate", date)
    query.ascending("publishDate");
    return await query.find();
  }

export async function getUnfinishedArticles(date, section) {
    const Articles = Parse.Object.extend("Articles");
    const query = new Parse.Query(Articles);
    query.include("responsible")
    query.notEqualTo("status", "F");
    query.include("Ideas")
    query.include("Section")
    query.equalTo("name", section)
    query.lessThanOrEqualTo("publishDate", date)
    query.ascending("publishDate");
    return await query.find();
  }
 export async function getArticleById(id) {
    const Articles = Parse.Object.extend("Articles");
    const query = new Parse.Query(Articles);
    query.get(id).then((article) => {
        return article
    }
    )
  }
