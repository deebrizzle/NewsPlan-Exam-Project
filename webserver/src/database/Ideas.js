import Parse from "parse";

export async function getIdeas(){
    const Ideas = Parse.Object.extend("Ideas")
    const query = new Parse.Query(Ideas)
    query.include("users")
    return await query.find()
}

export async function uploadIdea(ideaName, section, source, visibility, expirationDate, description) {
  const Idea = Parse.Object.Extend("Ideas");
  const newIdea = new Idea();

  newIdea.set("ideaName", ideaName);
  newIdea.set("ideaSource", source);
  newIdea.set("section", section);
  newIdea.set("visibility", visibility);
  newIdea.set("description", description);
  newIdea.set("expirationDate", expirationDate);

  try {
      return newIdea.save();
  } catch (error) {
      alert(error);
  }
};

export async function updateIdea(objectId, ideaName, section, source, visibility, expirationDate, description, keywords) {
  const Ideas = Parse.Object.extend("Ideas");
  const query = new Parse.Query(Ideas);
  query.get(objectId).then((object) => {
      object.set("ideaName", ideaName);
      object.set("ideaSource", source);
      object.set("section", section);
      object.set("visibility", visibility);
      object.set("description", description);
      object.set("expirationDate", expirationDate);
      object.set("keywords", keywords)
  }).catch((error) => {
      alert(error);
  })
};




  