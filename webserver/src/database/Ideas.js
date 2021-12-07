import Parse from "parse";
import { ConvertIfString, ConvertDateWithYear  } from "../components/ConvertDate";

export async function getIdeas() {
  const Ideas = Parse.Object.extend("Ideas");
  const query = new Parse.Query(Ideas);
  const results = await query.find();
  let ideas = results.map((row, index) => {
  return {
    id: index,
    expirationDate: ConvertDateWithYear(String(row.attributes.expirationDate)),
    source: row.get("ideaSource").get("username"),
    ideaName: row.attributes.ideaName,
    description: row.attributes.description,
    ideaId: row.id,
    section: row.get("section").get("name"),
    visibility: row.attributes.visibility,
  };
});
  return ideas
}

export async function uploadIdeaToDatabase(
  ideaName,
  description,
  visibility,
  date,
  ideaSourceObject,
  sectionObject,
  ideaId
) {
  let formattedDate = ConvertIfString(date);
  var Idea = Parse.Object.extend("Ideas");
  var newIdea = new Idea();

  if (ideaId === "") {
    newIdea.set("ideaName", ideaName);
    newIdea.set("description", description);
    newIdea.set("visibility", visibility);
    newIdea.set("expirationDate", formattedDate);
    newIdea.set("ideaSource", ideaSourceObject);
    newIdea.set("section", sectionObject);
  } else {
    newIdea.set("objectId", ideaId);
    newIdea.set("ideaName", ideaName);
    newIdea.set("description", description);
    newIdea.set("visibility", visibility);
    newIdea.set("expirationDate", formattedDate);
    newIdea.set("ideaSource", ideaSourceObject);
    newIdea.set("section", sectionObject);
  }
  try {
    await newIdea.save();
    alert("success");
    return true;
  } catch (error) {
    alert(error);
    return false;
  }
}


export async function deleteIdeaFromDatabase(ideaId) {
    const Idea = new Parse.Object('Ideas');
    Idea.set('objectId', ideaId);
    try {
      await Idea.destroy();
      alert('Success! deleted!');
      return true;
    } catch (error) {
      alert(`Error ${error.message}`);
      return false;
    };
  };
