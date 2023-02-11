import { crossAxios } from "../../config/crossAxios";

const triggerWebhookLeadApp = async (req, res) => {
  try {
    let { firstName, email, contactnum, lastName } = req.body;
    let htmlCode = `<li><a href="https://calendly.com/gavinrainedizon/ux-society-taft-lead-application">Schedule Interview with Gavin</a></li>
    <li><a href="https://calendly.com/rileyuy/uxsoc-lead-recruitment-2023">Schedule Interview with Riley</a></li>`;

    await crossAxios.post(process.env.WEBHOOK_LEAD_APP, {
      firstName,
      lastName,
      email,
      contactnum,
      htmlCode,
    });

    console.log(res);
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

export default triggerWebhookLeadApp;
