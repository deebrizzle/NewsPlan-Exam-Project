import Parse from "parse";

export async function getUsers(){
    const Users = Parse.Object.extend("User")
    const query = new Parse.Query(Users)
    return await query.find()
  }