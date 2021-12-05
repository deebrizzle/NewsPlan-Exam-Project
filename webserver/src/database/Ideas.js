import Parse from "parse";
import { ConvertIfCurrentDay } from "../components/ConvertDate";

export async function getIdeas() {
  const Ideas = Parse.Object.extend("Ideas");
  const query = new Parse.Query(Ideas);
  return await query.find();
}

export async function uploadIdea(
  ideaName,
  description,
  visibility,
  date,
  ideaSourceObject,
  sectionObject,
  ideaId
) {
  let formattedDate = ConvertIfCurrentDay(date);

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


export async function deleteIdea(ideaId) {
    // Create a new Todo parse object instance and set todo id
    const Idea = new Parse.Object('Ideas');
    Idea.set('objectId', ideaId);
    // .destroy should be called to delete a parse object
    try {
      await Idea.destroy();
      alert('Success! deleted!');
      return true;
    } catch (error) {
      alert(`Error ${error.message}`);
      return false;
    };
  };
