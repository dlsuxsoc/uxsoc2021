import { crossAxios } from "../../config/crossAxios";
import { notion } from "../../api/notion";
import { emailExists } from "../../helpers/emailExists";

const triggerWebhookMemApp = async (req, res) => {
  try {
    let { firstName, email, contactnum, interestedDept, lastName } = req.body;

    // trigger webhook
    const calendly_links = await notion.databases.query({
      database_id: process.env.NOTION_CALENDLINKS,
    });

    const sorted = calendly_links.results.sort((a, b) => 0.5 - Math.random());
    let counter = 1;
    let htmlElements = sorted.map((item) => {
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
      lastName,
      email,
      contactnum,
      htmlCode,
    });

    return res.status(201).json();
  } catch (e) {
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
