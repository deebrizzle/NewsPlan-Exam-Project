import Parse from "parse";

export async function getSections() {
  const Sections = Parse.Object.extend("Section");
  const query = new Parse.Query(Sections);
  return await query.find();
}
