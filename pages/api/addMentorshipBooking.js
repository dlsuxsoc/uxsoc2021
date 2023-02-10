import { notion } from "../../api/notion";
import mentorshipInstanceExists from "../../helpers/mentorshipInstanceExists";
const addMentorshipBooking = async (req, res) => {
  try {
    const data = { ...req.body };
    // check existing
    const result = await notion.databases.query({
      database_id: process.env.NOTION_MENTORSHIP_BOOKING,
    });

    const ids = result.results.map((item, index) => {
      return item.id;
    });

    const collectionOfMentorships = [];

    for (let i = 0; i < ids.length; i++) {
      let mentorship = await notion.pages.retrieve({
        page_id: ids[i],
      });
      //   console.log(mentorship.properties);
      collectionOfMentorships.push({
        email: mentorship.properties[`Email Address`].email,
        mentor: mentorship.properties[`Mentor`].rich_text[0].text.content,
        date: mentorship.properties[`Date`].rich_text[0].text.content,
      });
    }

    const key = {
      email: data.email,
      mentor: data.bookingMentor,
      date: data.bookingDate + " " + data.bookingSlot,
    };

    if (mentorshipInstanceExists(collectionOfMentorships, key)) {
      const error = new Error("Duplicate Mentorship");
      console.log("dupe");
      error.code = 400;
      error.message = "Appointment at current date and time already exists";

      throw error;
    }

    const response = await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_MENTORSHIP_BOOKING,
      },
      properties: {
        Client: {
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
        Mentor: {
          type: "rich_text",
          rich_text: [
            {
              type: "text",
              text: { content: data.bookingMentor },
            },
          ],
        },
        Date: {
          type: "rich_text",
          rich_text: [
            {
              type: "text",
              text: { content: data.bookingDate + " " + data.bookingSlot },
            },
          ],
        },
        "Email Address": {
          email: data.email,
        },
        PhoneNumber: {
          type: "rich_text",
          rich_text: [
            {
              type: "text",
              text: { content: data.contactNum },
            },
          ],
        },
        "Additional Messages": {
          type: "rich_text",
          rich_text: [
            {
              type: "text",
              text: { content: data.message },
            },
          ],
        },
      },
    });
    //console.log(response);
    console.log("suc");
    res.status(201).json(response);
  } catch (e) {
    console.log("fail");
    console.error(e);

    res.status(e.code || 500).json(e.msg);
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

export default addMentorshipBooking;
// let req = {
//     lastName : "LastName",
//     firstName : "FirstName",
//     nickname: "Nickname",
//     mentor: "SMITH, John",
//     bookingDate : "2022-01-22",
//     bookingTime : "13:00:00Z",
//     email: "email@email.com",
//     phoneNumber : "09121231234",
//     additionalMessages : "The quick brown fox jumps over the lazy dog",
//     status: 201
//   }

//   const response = await axios.post(
//     "http://localhost:3000/api/addMentorshipBooking",
//     req
//   );
