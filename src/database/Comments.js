  export async function getCommentsHTTP(query){
    let filterString = "?where=" + encodeURIComponent(JSON.stringify(query));
    const users = await fetch(
      "https://parseapi.back4app.com/classes/Comments/" + filterString,
      {
        method: "GET",
        headers: {
          "X-Parse-Application-Id": process.env.REACT_APP_APPLICATION_KEY,
          "X-Parse-REST-API-Key": process.env.REACT_APP_REST_API_KEY,
        },
      }
    );
    return await users.json();
  }

  export async function getCommentsFromArticle(articleId) {
    let query = {
      article: {
        $in: [articleId],
      },
    };
    return await getCommentsHTTP(query);
  }


