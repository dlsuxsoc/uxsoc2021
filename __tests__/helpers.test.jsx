import getRTFContent from "../helpers/getRTFContent";
import { restrictRange } from "../helpers/restrictRange";
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
    let num = restrictRange('a',5,0,4);
    expect(num).toBe("");
  })

  it('input is less than start', () => {
    let num = restrictRange(4,5,5,10);
    expect(num).toBe(5);
  })

  it('input is greater than start less than end', () => {
    let num = restrictRange(5,1,0,10);
    expect(num).toBe(5);
  })

  it('input is equal to prev and greater than end', () => {
    let num = restrictRange(5,5,0,4);
    expect(num).toBe(4);
  })

})

