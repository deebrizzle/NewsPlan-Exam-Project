import { getAllArticlesByResponsible } from "./Articles";
import { getCommentsFromArticle } from "./Comments";

export function articleFilterSection(articles, section) {
  if (Object.keys(section).length === 0 || section === undefined) {
    return articles;
  } else {
    const filtered = articles.filter(
      (article) => article.ideaId.attributes.section.attributes.name === section
    );
    return filtered;
  }
}

export function articleFilterSource(articles, source) {
  if (Object.keys(source).length === 0 || source === undefined) {
    return articles;
  } else {
    const filtered = articles.filter((article) => article.username === source);
    return filtered;
  }
}

export function articleFilterEmployees(articles, source) {
  if (Object.keys(source).length === 0 || source === undefined) {
    return articles;
  } else {
    const filtered = articles.filter(
      (article) => article.attributes.responsible.attributes.username === source
    );
    return filtered;
  }
}

export function articleFilterSectionEmployees(articles, section) {
  if (Object.keys(section).length === 0 || section === undefined) {
    return articles;
  } else {
    const filtered = articles.filter(
      (article) => article.attributes.responsible.attributes.section === section
    );
    return filtered;
  }
}

export async function allCommentsToArticleResponsible(userId) {
  const allArticles = await getAllArticlesByResponsible(userId);
  let commentsForResponsible = [];
  for (let index = 0; index < allArticles.length; index++) {
    const articleId = allArticles[index].objectId;
    const headline = allArticles[index].headline;
    const commentsOnArticle = await getCommentsFromArticle(articleId);
    commentsOnArticle.forEach((element) => {
      element.headline = headline;
    });
    commentsForResponsible.push(commentsOnArticle);
  }
  return commentsForResponsible;
}
