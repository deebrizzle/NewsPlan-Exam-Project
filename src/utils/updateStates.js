import { convertToMonthDayYearString, convertStringDateToDateObject } from "./convertDate"
import { v4 as uuidv4 } from 'uuid';

export function uploadIdeaToState(idea, description, visibility, section, ideaSource, ideaId, date, listOfIdeas, setListOfIdeas){
const id = uuidv4();
if(ideaId === ""){
  let dates = convertStringDateToDateObject(date)
  let IdeaInputFields = [{id, expirationDate: convertToMonthDayYearString(String(dates)), ideaName: idea, description, visibility, section, source: ideaSource, ideaId:id}];
  const newListOfIdeas = listOfIdeas.concat(IdeaInputFields)
  setListOfIdeas(newListOfIdeas)
}
else{
  let IdeaInputFieldss = [{id, expirationDate: convertToMonthDayYearString(String(date)), ideaName: idea, description, visibility, section, source: ideaSource, ideaId}];
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
