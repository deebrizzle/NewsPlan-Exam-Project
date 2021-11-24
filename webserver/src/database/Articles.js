import Parse from "parse";

//TODO: Article functions are not getting article objects yet - query.include section + user + idea?
//TODO: figure out how to query by only date without the timestamp
export async function getFinishedArticles(date, section) {
    const Articles = Parse.Object.extend("Articles");
    const query = new Parse.Query(Articles);
    query.include("responsible")
    query.equalTo("status", "F");
    query.include("idea")
    query.equalTo("section", section)
    query.equalTo("publishDate", date)
    return await query.find();
  }

export async function getUnfinishedArticles(date, section) {
    const Articles = Parse.Object.extend("Articles");
    const query = new Parse.Query(Articles);
    query.include("responsible")
    query.notEqualTo("status", "F");
    query.include("idea")
    query.equalTo("section", section)
    query.equalTo("publishDate", date)
    return await query.find();
  }
