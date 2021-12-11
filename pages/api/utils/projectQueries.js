// event queries
const GET_PROJECTS = `
query getProjects($offset:Int){
  projectCollection(skip: $offset, order:title_ASC){
    items {
      title
			description
      image{
        url
      }
			slug
    }
  }
}
    `;

const GET_PROJECT = `
query getProjects($slug:String){
    projectCollection(where:{slug : $slug },limit: 1){
      items{
        title
        description
        image{
          url
        }
        slug
        
      }
    }
  }
`;
export { GET_PROJECTS, GET_PROJECT };
