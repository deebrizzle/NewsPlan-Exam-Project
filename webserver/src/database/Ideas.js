import Parse from "parse";

export async function getIdeas(){
    const Ideas = Parse.Object.extend("Ideas")
    const query = new Parse.Query(Ideas)
    query.include("users")
    return await query.find()
  }

  