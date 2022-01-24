import { notion } from "../../api/notion";

const addMentorshipBooking = async (req, res) => {
  try {
    const data = { ...req.body };
    console.log(process.env.NOTION_MENTORSHIP_BOOKING);
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
        "Mentor" : {
            type:"rich_text",
            rich_text:[
                {
                    type: "text",
                    text: { content : data.mentor },
                },
            ],
        },
        "Date": {
            type:"rich_text",
            rich_text:[
                {
                  type: "text",
                  text: { content : data.date },
                },
              ], 
        },
        "Email Address": {
          email: data.email,
        },
        "PhoneNumber": {
            type:"rich_text",
            rich_text:[
                {
                    type: "text",
                    text: { content : data.phoneNumber },
                },
            ],
        },
        "Additional Messages": {
            type: "rich_text",
            rich_text: [
              {
                type: "text",
                text: { content: data.additionalMessages },
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
