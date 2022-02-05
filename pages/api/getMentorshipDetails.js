import { notion } from "../../api/notion";

const getMentorshipDetails = async (req, res) => {
  try {
    const result = await notion.databases.query({
      database_id: process.env.NOTION_MENTORSHIP_BOOKING,
    });

    const ids = result.results.map((item, index) => {
      return item.id;
    });

    const collection = [];

    for (let i = 0; i < ids.length; i++) {
      let mentorship = await notion.pages.retrieve({
        page_id: ids[i],
      });
    //   console.log(mentorship.properties);
      collection.push({
          email : mentorship.properties[`Email Address`].email,
          mentor : mentorship.properties[`Mentor`].rich_text[0].text.content,
          date : mentorship.properties[`Date`].rich_text[0].text.content,
        });
    }
    res.status(200).json(collection);
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

export default getMentorshipDetails;
