import Parse from "parse";

export async function getCurrentUser(){
const currentUser = Parse.User.current();
return currentUser
}

export async function getUsers() {
  const Users = Parse.Object.extend("User");
  const query = new Parse.Query(Users);
  query.ascending("username");
  return await query.find();
}


export async function getUser(username){
  const Users = Parse.Object.extend("User");
  const query = new Parse.Query(Users);
  query.equalTo('username', username);
  return await query.find()
}

export async function getEditors() {
  const Users = Parse.Object.extend("User");
  const query = new Parse.Query(Users);
  query.equalTo('isEditor', true);

  return await query.find();
}

export async function getPhotographers() {
  const Users = Parse.Object.extend("User");
  const query = new Parse.Query(Users);
  query.equalTo('isPhotographer', true);

  return await query.find();
}

export async function getUsersFromSection(section) {
  const Users = Parse.Object.extend("User");
  const query = new Parse.Query(Users);
  query.descending("username");
  query.exclude("section", section);
  return await query.find();
}
