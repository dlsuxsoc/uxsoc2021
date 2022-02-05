import { notion } from "../../api/notion";

const getMembershipEmails = async (req, res) => {
  try {
    const result = await notion.databases.query({
      database_id: process.env.NOTION_MEMBERSHIP_APPLICATION,
    });

    const ids = result.results.map((item, index) => {
      return item.id;
    });

    const people = [];

    for (let i = 0; i < ids.length; i++) {
      let person = await notion.pages.retrieve({
        page_id: ids[i],
      });
      people.push(person.properties[`Email Address`].email);
    }
    res.status(200).json(people);
  } catch (e) {
    console.error(e);

    res.status(400).json({
      status: "Error",
      information: e,
    });
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

export default getMembershipEmails;
