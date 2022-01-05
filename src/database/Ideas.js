import Parse from "parse";
import { convertStringDateToDateObject, convertToMonthDayYearString } from "../components/convertDate";

export async function getIdea(ideaId) {
  const Ideas = Parse.Object.extend("Ideas");
  const query = new Parse.Query(Ideas);
  query.equalTo("objectId", ideaId);
  return await query.find();
}

export async function getIdeas() {
  const Ideas = Parse.Object.extend("Ideas");
  const query = new Parse.Query(Ideas);
  query.includeAll();
  query.limit(1000);
  const results = await query.find();
  let ideas = results.map((row, index) => {
    return {
      id: index,
      expirationDate: convertToMonthDayYearString(
        String(row.attributes.expirationDate)
      ),
      source: row.get("ideaSource").get("username"),
      ideaName: row.attributes.ideaName,
      description: row.attributes.description,
      ideaId: row.id,
      section: row.get("section").get("name"),
      visibility: row.attributes.visibility,
    };
  });
  return ideas;
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
  let Idea = Parse.Object.extend("Ideas");
  let newIdea = new Idea();

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
export async function deleteHTTP(idea) {
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

export function ideaFilterSection(ideas, section) {
  if (Object.keys(section).length === 0 || section === undefined) {
    return ideas;
  } else {
    const filtered = ideas.filter((ideas) => ideas.section === section);
    return filtered;
  }
}

export function ideaFilterSearch(ideas, search) {
  if (search === undefined || search === "") {
    return ideas;
  } else {
    const matches = ideas.filter((idea) => {
      if (idea.ideaName.toLowerCase().includes(search) === true || idea.description.toLowerCase().includes(search) === true) {
        return true;
      }
      return false;
    });
    return matches;
  }
}

export async function visibilityFromCloud(visibilityString) {
  const params =  { visibility: visibilityString };
  const count = await Parse.Cloud.run("visibility", params);
  return count;
}