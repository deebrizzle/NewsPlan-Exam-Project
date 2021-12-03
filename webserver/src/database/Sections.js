import Parse from "parse";

export async function getSections() {
    const Sections = Parse.Object.extend("Section");
    const query = new Parse.Query(Sections);
    return await query.find();
}   

export async function getSection(section) {
    const Sections = Parse.Object.extend("Section");
    const query = new Parse.Query(Sections);
    query.equalTo('name', section);
    return await query.find();
}   