import { crossAxios } from "../../config/crossAxios";
import { notion } from "../../api/notion";
import { emailExists } from "../../helpers/emailExists";

const triggerWebhookMemApp = async (req, res) => {
  try {
    let { firstName, email, contactnum, interestedDept } = req.body;
    // trigger webhook

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

    if (emailExists(email, people)) {
      const error = new Error("Duplicate Application");
      error.code = 400;
      error.msg = "An application with this email was already used";

      throw error;
    }

    // PROCESS Calendly
    const calendly_links = await notion.databases.query({
      database_id: process.env.NOTION_CALENDLINKS,
    });

    let counter = 1;

    let htmlElements = calendly_links.results.map((item) => {
      const depts = item.properties["Department/s"].multi_select.map(
        (item) => item.name
      );
      const url = item.properties.URL.url;

      let isFound = false;

      interestedDept.map((dept) => {
        if (depts.includes(dept)) {
          isFound = true;
          return;
        }
      });

      let code = "";

      if (isFound) {
        code = `<li><a href="${url}">Schedule Interview Link ${counter}</a></li>`;
        counter++;
      } else {
        code = ``;
      }
      return code;
    });

    let htmlCode = htmlElements.join("");

    await crossAxios.post(process.env.WEBHOOK_MEM_APP, {
      firstName,
      email,
      contactnum,
      htmlCode,
    });

    // return response as the 3 values
    return res.status(201).json({ firstName, email, contactnum });
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
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

export default triggerWebhookMemApp;