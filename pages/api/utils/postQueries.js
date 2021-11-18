// event queries
const get_posts = `
query {
    postCollection {
      total
      items {
        title
        content {
          json
        }
        imagesCollection {
          items {
            fileName
          }
          total
        }
      }
    }
  }
  
    `;

const get_post =``;
export {get_posts} 