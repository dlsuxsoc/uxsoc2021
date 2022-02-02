import getRTFContent from "../helpers/getRTFContent";
import { restrictRange } from "../helpers/restrictRange";
import expandTimeSlots from "../helpers/expandTimeSlots";
//import getEventImage from '../helpers/getEventImage'

// content of articles is seen in the articles page
describe("Get article contents", () => {
  it("renders article 1's content in the articles page with no specified start and end splicing.", () => {
    const article = {
      content: {
        json: {
          noteType: "document",
          data: {},
          content: [
            {
              nodeType: "paragraph",
              content: [
                {
                  nodeType: "text",
                  value: "bla bla bla",
                },
              ],
              data: {},
            },
          ],
        },
      },
      authors: null,
      title: "Article 1",
      slug: "article-1",
    };
    const article_content = getRTFContent(article);

    expect(article_content).toEqual("bla bla bla");
  });

  it("renders article 2's content in the articles page with end slicing.", () => {
    const article = {
      content: {
        json: {
          noteType: "document",
          data: {},
          content: [
            {
              nodeType: "paragraph",
              content: [
                {
                  nodeType: "text",
                  value: "bla bla bla",
                },
              ],
              data: {},
            },
          ],
        },
      },
      authors: null,
      title: "Article 2",
      slug: "article-2",
      imagesCollection: { items: [[Object], [Object]] },
    };
    const article_content = getRTFContent(article, 0, 5);

    expect(article_content).toEqual("bla b");
  });

  it("renders article 3's content in the articles page with middle slicing", () => {
    const article = {
      content: {
        json: {
          noteType: "document",
          data: {},
          content: [
            {
              nodeType: "paragraph",
              content: [
                {
                  nodeType: "text",
                  value: "bla bla bla",
                },
              ],
              data: {},
            },
          ],
        },
      },
      authors: null,
      title: "Article 3",
      slug: "article-3",
      imagesCollection: { items: [[Object], [Object]] },
    };
    const article_content = getRTFContent(article, 1, 6);

    expect(article_content).toEqual("la bl");
  });
});

describe('Testing Restricting Range', () => {
  it('input is a letter', () => {
    let a = 'a';
    let b = 5;
    let c = 0;
    let d = 4;

    let num = restrictRange(a,b,c,d);
    expect(num).toBe("");
  })

  it('input is less than start', () => {
    let a = 4;
    let b = 5;
    let c = 5;
    let d = 10;

    let num = restrictRange(a,b,c,d);
    expect(num).toBe(5);
  })

  it('input is greater than start less than end', () => {
    let a = 5;
    let b = 1;
    let c = 0;
    let d = 10;

    let num = restrictRange(a,b,c,d);
    expect(num).toBe(5);
  })

  it('input is equal to prev and greater than end', () => {
    let a = 5;
    let b = 5;
    let c = 0;
    let d = 4;

    let num = restrictRange(a,b,c,d);
    expect(num).toBe(4);
  })

})

describe('Testing timeslot conversions', () =>{
  describe('Should produce an object separated by day, start time and end time', () => {
      it('One of each day and time', () => {
          let slots = 'M 09:30AM-11:00AM, T 01:00PM-02:00PM, W 07:00AM-08:00AM, H 09:30AM-10:30PM, F 03:00AM-06:00PM';
      
          let expectedSlots = [
            { day: 'Monday', times: [ { start: '09:30AM', end: '11:00AM' } ] },
            { day: 'Tuesday', times:  [ { start: '01:00PM', end: '02:00PM' } ] },
            { day: 'Wednesday', times: [ { start: '07:00AM', end: '08:00AM' } ] },
            { day: 'Thursday', times: [ { start: '09:30AM', end: '10:30PM' } ] },
            { day: 'Friday', times: [ { start: '03:00AM', end: '06:00PM' } ] }
          ]

          slots = expandTimeSlots(slots);

          expect(slots).toEqual(expectedSlots);
        })
    
      it('Multiple times in a day', () => {
            let slots = 'M 09:30AM-11:00AM, 05:00PM-07:00PM, 03:00PM-04:00PM, T 01:00PM-02:00PM, W 07:00AM-08:00AM, H 09:30AM-10:30PM, F 03:00AM-06:00PM';
            let expectedSlots = [
              { day: 'Monday', times: [ 
                                        { start: '09:30AM', end: '11:00AM' },
                                        { start: '05:00PM', end: '07:00PM' },
                                        { start: '03:00PM', end: '04:00PM' } ] },
              { day: 'Tuesday', times:  [ { start: '01:00PM', end: '02:00PM' } ] },
              { day: 'Wednesday', times: [ { start: '07:00AM', end: '08:00AM' } ] },
              { day: 'Thursday', times: [ { start: '09:30AM', end: '10:30PM' } ] },
              { day: 'Friday', times: [ { start: '03:00AM', end: '06:00PM' } ] }
            ]

            slots = expandTimeSlots(slots);

            expect(slots).toEqual(expectedSlots);
          })
    
      it('Multiple days with multiple times', () => {
           let slots = 'M 05:00PM-07:00PM, 12:45PM-12:45AM, T 01:00PM-02:00PM, W 07:00AM-08:00AM, 12:45PM-12:45AM, H 09:30AM-10:30AM, F 03:00AM-06:00PM';
           let expectedSlots = [
            { day: 'Monday', times:     [
                                          { start: '05:00PM', end: '07:00PM' },
                                          { start: '12:45PM', end: '12:45AM' } ] },
            { day: 'Tuesday', times:  [ { start: '01:00PM', end: '02:00PM' } ] },
            { day: 'Wednesday', times: [
                                          { start: '07:00AM', end: '08:00AM' },
                                          { start: '12:45PM', end: '12:45AM' } ] },
            { day: 'Thursday', times: [ { start: '09:30AM', end: '10:30AM' } ] },
            { day: 'Friday', times: [ { start: '03:00AM', end: '06:00PM' } ] }
          ]

           slots = expandTimeSlots(slots);

           expect(slots).toEqual(expectedSlots);
          })
  })
})
