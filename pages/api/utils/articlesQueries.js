// article queries
const GET_ARTICLES = `
query getArticles($slug:String){
    articleCollection(where:{slug : $slug}){
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

const GET_ARTICLE=`
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
export {GET_ARTICLES,GET_ARTICLE} 
