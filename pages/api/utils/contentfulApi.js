import { get_posts } from "./postQueries";
import { documentQuery } from "./documentQuery";
export default class ContentfulApi {
  static async call(query) {
    let url = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_TOKEN}`;

    const config = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.CONTENTFUL_CDA_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    };

    try {
      const data = await fetch(url, config).then((res) => res.json());
      return data;
    } catch (e) {
      console.error(e);
      throw new Error("Could not fetch Contentful Data");
    }
  }

  static async getPosts() {
    const res = await this.call(get_posts);
    return res;
  }

  static async getDocument(documentId) {
    const res = await this.call(documentQuery(documentId));
    return res;
  }
}
