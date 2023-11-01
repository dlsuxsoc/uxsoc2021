import { notion } from "../../api/notion";

const getFAQ = async (req, res) => {
  try {
    const { results: faq } = await notion.databases.query({
      database_id: process.env.NOTION_FAQ,
      sorts: [{ property: "Order", direction: "ascending" }],
    });

    // const faqItems = faq.map((faqItem) => {
    //   const data = faqItem.properties;
    //   return {
    //     question: data.Question.title[0].text.content,
    //     answer: data.Answer.rich_text[0].plain_text,
    //   };
    // });

    const faqItems = [];

    for (let i = 0; i < faq.length; i++) {
      const data = faq[i].properties;
      faqItems.push({
        question: data.Question.title[0].text.content,
        answer: data.Answer.rich_text[0].plain_text,
      });
    }

    return faqItems;
  } catch (e) {
    console.error(e);
    return e;
  }
};

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "1mb",
      externalResolver: true,
    },
  },
};

export default getFAQ;
