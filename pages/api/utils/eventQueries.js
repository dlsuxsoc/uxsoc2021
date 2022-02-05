// event queries
const GET_EVENTS = `
query getEvents($offset:Int){  
  eventCollection(skip: $offset, order: dateStart_DESC){
    items{
      title
      slug
      description
      dateStart
      dateEnd
      image {
        title
        description
        contentType
        fileName
        size
        url
        width
        height
      }
    }
  }
}
    `;

const GET_EVENT = `
query getEvents($slug:String){  
  eventCollection(where:{slug : $slug}, limit : 1){
    items{
      title
      slug
      description
      dateStart
      dateEnd
      image {
        title
        description
        contentType
        fileName
        size
        url
        width
        height
      }
    }
  }
}
`;

const GET_EVENTS_BY_YEAR = `
query getEventsByYear($offset: Int, $dateStart: DateTime, $dateEnd: DateTime) {
  eventCollection(skip: $offset, where: {dateStart_gte: $dateStart, dateEnd_lte: $dateEnd}, limit: 5) {
    items {
      title
      slug
      description
      dateStart
      dateEnd
      image {
        title
        description
        contentType
        fileName
        size
        url
        width
        height
      }
    }
  }
}
`;
export { GET_EVENTS, GET_EVENT, GET_EVENTS_BY_YEAR };
