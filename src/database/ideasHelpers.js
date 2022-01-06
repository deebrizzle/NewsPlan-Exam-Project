export function ideaFilterSection(ideas, section) {
    if (Object.keys(section).length === 0 || section === undefined) {
      return ideas;
    } else {
      const filtered = ideas.filter((ideas) => ideas.section === section);
      return filtered;
    }
  }
  
  export function ideaFilterSearch(ideas, query) {
    const search = query.toLowerCase();
  
    if (search === undefined || search === "") {
      return ideas;
    } else {
      const matches = ideas.filter((idea) => {
        if (idea.ideaName.toLowerCase().includes(search) === true || idea.description.toLowerCase().includes(search) === true) {
          return true;
        }
      });
      return matches;
    }
  }
  