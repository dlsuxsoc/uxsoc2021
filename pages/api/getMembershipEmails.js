import { notion } from "../../api/notion";

const getMembershipEmails = async (req, res) => {
  try {
    const result = await notion.databases.query({
      database_id: process.env.NOTION_MEMBERSHIP_APPLICATION,
    });

    const people = result.results.map((item) => {
      return item.properties["Email Address"].email;
    });

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
