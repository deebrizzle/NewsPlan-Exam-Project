import Parse from "parse";

export async function getUsers(){
    const Users = Parse.Object.extend("User");
    const query = new Parse.Query(Users);
    query.ascending("username");
    return await query.find()
}


export async function getUser(username){
  const Users = Parse.Object.extend("User");
  const query = new Parse.Query(Users);
  query.equalTo('username', username);
  return await query.find()
}

export async function getEditors() {
  const Users = Parse.Object.extend("Users");
  const query = new Parse.Query(Users);
  query.equalTo("isEditor", "True")

  return await query.find();
}

export async function getPhotographers() {
  const Users = Parse.Object.extend("Users");
  const query = new Parse.Query(Users);
  query.equalTo("isPhotographer", "True")

  return await query.find();
}

export async function getUsersFromSection(section) {

    //TODO Convert sections column in database into pointer Sections objectId?
    const Users = Parse.Object.extend("Users");
    const query = new Parse.Query(Users);
    query.descending("username");
    query.exclude("section", section)
    return await query.find();
}