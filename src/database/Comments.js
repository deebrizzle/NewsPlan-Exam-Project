  export async function getCommentsHTTP(query){
    let filterString = "?where=" + encodeURIComponent(JSON.stringify(query));
    const users = await fetch(
      "https://parseapi.back4app.com/classes/Comments/" + filterString,
      {
        method: "GET",
        headers: {
          "X-Parse-Application-Id": "sKHk8zPeX3rnU3xQ59fW7xfGlXSBKqZ5ji63zoNe",
          "X-Parse-REST-API-Key": "nSfK55ozaXq4lDupY88SQJ42lki7xdFqe60ppdJB",
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


