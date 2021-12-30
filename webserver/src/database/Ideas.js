import Parse from "parse";
import { convertStringDateToDateObject, convertToMonthDayYearString  } from "../components/convertDate";

export async function getIdeas() {
  const Ideas = Parse.Object.extend("Ideas");
  const query = new Parse.Query(Ideas);
  query.include("Section")
  query.include("User")
  const results = await query.find();
  let ideas = results.map((row, index) => {
  return {
    id: index,
    expirationDate: convertToMonthDayYearString(String(row.attributes.expirationDate)),
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
  let formattedDate = convertStringDateToDateObject(date);
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


//TODO Console log delete from Sara's review? Or show it to the user?
  export async function deleteHTTP(idea){
    try {
    await fetch(
      "https://parseapi.back4app.com/classes/Ideas/" + idea.objectId,
      {
        method: "DELETE",
        headers: {
          "X-Parse-Application-Id": process.env.REACT_APP_APPLICATION_KEY,
          "X-Parse-REST-API-Key": process.env.REACT_APP_REST_API_KEY,
        },
      }
    );
    alert("success! deleted");
  } catch (error) {
    console.log("Error: " + error);
  }
}

export async function deleteIdeaFromDatabaseREST(ideaId) {
  let idea = {
    objectId: [ideaId],
  };
  return await deleteHTTP(idea);
}
