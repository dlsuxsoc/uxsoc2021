import getRTFContent from "../helpers/getRTFContent";
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

// describe('Get images in events', () => {
//     it('renders event 1\'s image in the events page.', () => {
//         const events = {

//         };
//         const event_image = getEventImage();

//         expect(article_content).toEqual("bla bla bla");
//      })
// })
