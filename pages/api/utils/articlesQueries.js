// article queries
const GET_ARTICLES = `
query getArticles($offset: Int){
  articleCollection(skip: $offset, order: date_DESC){
    items{
      content{
        json
      }
      authors
      title
      slug
      imagesCollection{
        items{
          url
        }
      }
    }
  }
}
    `;

const GET_ARTICLE = `
query getArticles($slug:String){
    articleCollection(where:{slug : $slug}, limit : 1){
      items{
        content{
          json
        }
        authors
        title
        slug
        imagesCollection{
          items{
            url
          }
        }
      }
    }
  }
`;

const GET_ARTICLES_BY_YEAR = `
query getArticlesByYear($offset: Int, $dateStart: DateTime, $dateEnd: DateTime) {
  articleCollection(skip: $offset, where: {date_gte: $dateStart, date_lte: $dateEnd}) {
    items {
      authors
      title
      slug
      date
      imagesCollection {
        items {
          url
        }
      }
    }
  }
}
`;
export { GET_ARTICLES, GET_ARTICLE, GET_ARTICLES_BY_YEAR };
