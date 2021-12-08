// event queries
const GET_EVENTS = `
query getEvents($offset:Int){  
  eventCollection(skip: $offset){
    items{
      title
      slug
      description
      dateStart
      dateEnd
    }
  }
}
    `;

const GET_EVENT=`
query getEvents($slug:String){  
    eventCollection(where:{slug : $slug}, limit : 1){
      items{
        title
        slug
        description
        dateStart
        dateEnd
      }
    }
  }
`;
export {GET_EVENTS,GET_EVENT} 
