import { notion } from "../../api/notion";

const addMembershipApplication = async (req, res) => {
  try {
    const data = { ...req.body };

    const response = await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_MEMBERSHIP_APPLICATION,
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: `${data.lastName.toUpperCase()}, ${data.firstName}`,
              },
            },
          ],
        },
        Nickname: {
          type: "rich_text",
          rich_text: [
            {
              type: "text",
              text: { content: data.nickname },
            },
          ],
        },
        "Birth Date": {
          date: {
            start: new Date(
              `${data.yOB}-${data.mOB}-${String(data.dOB).padStart(
                2,
                "0"
              )}T00:00:00.000+00:00`
            )
              .toISOString()
              .slice(0, 10),
          },
        },
        "Preferred Pronoun": {
          select: {
            name: data.customPronoun !== "" ? data.customPronoun : data.pronoun,
          },
        },
        "Email Address": {
          email: data.email,
        },
        "Phone Number": {
          type: "rich_text",
          rich_text: [
            {
              type: "text",
              text: { content: data.contactnum },
            },
          ],
        },
        College: {
          select: {
            name: data.college,
          },
        },
        Program: {
          type: "rich_text",
          rich_text: [
            {
              type: "text",
              text: { content: data.program },
            },
          ],
        },
        Status: {
          select: {
            name: "Pending",
          },
        },
      },
      children: [],
    });
    console.log(response);
    res.status(201).json(response);
  } catch (e) {
    console.error(e);
    res.status(req.body.status).json(req.body);
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

export default addMembershipApplication;
