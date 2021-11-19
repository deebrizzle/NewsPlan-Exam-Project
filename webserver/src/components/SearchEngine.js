import MiniSearch from 'minisearch'
import * as React from 'react'

// The MiniSearch fulltext search engine library is used here https://github.com/lucaong/minisearch


export default function SearchEngine() {
  const [ideas, setIdeas] = React.useState();
  const [searchEngine, setSearchEngine] = React.useState();

  let searchEngine = new MiniSearch({
    fields: [],
    storeFields: [],
  })

  async function setIdeas() {
    var ideas = new Parse.Query(Ideas);
  
    ideas.find().then((results) => {
      populateIdeaBank(results)
  
    }).catch((error) =>  {
      console.log("Parse.error:" + error)
    });
    
  }
  
  function setSearchEngine(ideas) {
    miniSearch.addAll(ideas);
    console.log(ideas);
  }
  
}


