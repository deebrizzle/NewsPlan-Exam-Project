import Parse from "parse";

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
  sectionObject
) {
  function ConvertIfCurrentDay(date) {
    if (typeof date === "string" || date instanceof String) {
      date.split(",");
      const dateArray = date.split(/[ ,]+/);
      let dateString = dateArray[1] + " " + dateArray[0] + " " + dateArray[2];
      const formattedDay = new Date(dateString);
      return formattedDay;
    }
    return date;
  }

  let formattedDate = ConvertIfCurrentDay(date);
  var Idea = Parse.Object.extend("Ideas");
  var newIdea = new Idea();

  newIdea.set("ideaName", ideaName);
  newIdea.set("description", description);
  newIdea.set("visibility", visibility);
  newIdea.set("expirationDate", formattedDate);
  newIdea.set("ideaSource", ideaSourceObject);
  newIdea.set("section", sectionObject);

  try {
    await newIdea.save();
    alert("success");
    return true;
  } catch (error) {
    alert(error);
    return false;
  }
}

export async function updateIdea(
  objectId,
  ideaName,
  section,
  ideaSource,
  visibility,
  expirationDate,
  description,
  keywords
) {
  const Ideas = Parse.Object.extend("Ideas");
  const query = new Parse.Query(Ideas);
  query
    .get(objectId)
    .then((object) => {
      object.set("ideaName", ideaName);
      object.set("ideaSource", ideaSource);
      object.set("section", section);
      object.set("visibility", visibility);
      object.set("description", description);
      object.set("expirationDate", expirationDate);
      object.set("keywords", keywords);
    })
    .catch((error) => {
      alert(error);
    });
}
