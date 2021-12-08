import { ConvertDateWithYear, ConvertIfString } from "./ConvertDate"

export function uploadIdeaToState(listOfIdeas, IdeaInputFields, id, idea, description, visibility, section, ideaSource, ideaId, date, setListOfIdeas){
if(ideaId === ""){
  let dates = ConvertIfString(date)
  let IdeaInputFields = [{id, expirationDate: ConvertDateWithYear(String(dates)), ideaName: idea, description, visibility, section, source: ideaSource, ideaId}];
  const newListOfIdeas = listOfIdeas.concat(IdeaInputFields)
  setListOfIdeas(newListOfIdeas)
}
else{
  let IdeaInputFieldss = [{id, expirationDate: ConvertDateWithYear(String(date)), ideaName: idea, description, visibility, section, source: ideaSource, ideaId}];
  const newListOfIdeas = listOfIdeas.map(idea => {
    const listOfIdeas = IdeaInputFieldss.find(({ ideaId }) => ideaId === idea.ideaId);
    return listOfIdeas ? listOfIdeas : idea;
  });
  setListOfIdeas(newListOfIdeas)
}
}

export function deleteIdeaFromState(ideaId, listOfIdeas, setListOfIdeas){
      let newListOfIdeas = listOfIdeas.filter(function( idea ) {
        return idea.ideaId !== ideaId;
      });
      setListOfIdeas(newListOfIdeas)
}
