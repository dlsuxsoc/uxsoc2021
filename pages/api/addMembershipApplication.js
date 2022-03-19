import axios from "axios";
import { notion } from "../../api/notion";
import { emailExists } from "../../helpers/emailExists";

const addMembershipApplication = async (req, res) => {
  try {
    const data = { ...req.body };

    // Check Existing
    const result = await notion.databases.query({
      database_id: process.env.NOTION_MEMBERSHIP_APPLICATION,
    });

    const people = result.results.map((item, index) => {
      return item.properties["Email Address"].email;
    });

    if (emailExists(data.email, people)) {
      const error = new Error("Duplicate Application");
      error.code = 400;
      error.msg = "An application with this email was already used";

      throw error;
    }

    const response = await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_MEMBERSHIP_APPLICATION,
      },
      properties: {
        StudentID: {
          select: {
            name: data.studentID,
          },
        },
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
              `${data.yOB}-${String(data.mOB).padStart(2, "0")}-${String(
                data.dOB
              ).padStart(2, "0")}T00:00:00.000+00:00`
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
        "Interested Department/s": {
          multi_select:
            data.interestedDept.map((item) => {
              return { name: item };
            }) || [],
        },
        Status: {
          select: {
            name: "Pending",
          },
        },
      },
      children: [
        {
          object: "block",
          type: "heading_2",
          heading_2: {
            text: [
              {
                type: "text",
                text: {
                  content: "Pre-Interview Questions",
                },
              },
            ],
          },
        },
        {
          object: "block",
          type: "heading_3",
          heading_3: {
            text: [
              {
                type: "text",
                text: {
                  content: "1. What are your hobbies?",
                },
              },
            ],
          },
        },
        {
          object: "block",
          type: "paragraph",
          paragraph: {
            text: [
              {
                type: "text",
                text: {
                  content: data.hobbies,
                },
              },
            ],
          },
        },
        {
          object: "block",
          type: "heading_3",
          heading_3: {
            text: [
              {
                type: "text",
                text: {
                  content:
                    "2. Why are you interested in joining the organization?",
                },
              },
            ],
          },
        },
        {
          object: "block",
          type: "paragraph",
          paragraph: {
            text: [
              {
                type: "text",
                text: {
                  content: data.interestedOrg,
                },
              },
            ],
          },
        },
        {
          object: "block",
          type: "heading_3",
          heading_3: {
            text: [
              {
                type: "text",
                text: {
                  content: "3. What is user experience to you?",
                },
              },
            ],
          },
        },
        {
          object: "block",
          type: "paragraph",
          paragraph: {
            text: [
              {
                type: "text",
                text: {
                  content: data.whatIsUX,
                },
              },
            ],
          },
        },
        {
          object: "block",
          type: "heading_3",
          heading_3: {
            text: [
              {
                type: "text",
                text: {
                  content:
                    "4. How do you think user experience applies in your current degree program and interests?",
                },
              },
            ],
          },
        },
        {
          object: "block",
          type: "paragraph",
          paragraph: {
            text: [
              {
                type: "text",
                text: {
                  content: data.practicalityUX,
                },
              },
            ],
          },
        },
      ],
    });

    res.status(201).json();
  } catch (err) {
    //console.log(err);
    //console.error(e);
    res.status(err.code || 500).json(err);
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
