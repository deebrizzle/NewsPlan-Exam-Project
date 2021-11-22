import Parse from "parse";

export async function getAllUsers() {
    const Users = Parse.Object.extend("Users");
    const query = new Parse.Query(Users);
    return await query.find();
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

    if (section != "Foreign Affairs" || section != "Financial") {
        console.log("Error: Section does not exist")
        return new Error("Error: Section does not exist");
    }

    else {
        const Users = Parse.Object.extend("Users");
        const query = new Parse.Query(Users);
        query.equalTo("section", section)
        return await query.find();
    }
}