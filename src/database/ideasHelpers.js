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
      const matches = ideas.filter((idea) => idea.ideaName.toLowerCase().includes(search) || idea.description.toLowerCase().includes(search))
      return matches;
    }
  }
  