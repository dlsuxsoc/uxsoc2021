import { notion } from "../../api/notion";
import expandTimeSlots from "../../helpers/expandTimeSlots";
const getMentors = async (req, res) => {
    try {
        const result = await notion.databases.query({ database_id: process.env.NOTION_MENTOR_LIST});
        const ids = result.results.map((item, index) => {
            return item.id;
        });

        const mentors = [];

        for (let i = 0; i < ids.length; i++) {
            let mentor = await notion.pages.retrieve({
                page_id: ids[i],
            });
            let data = mentor.properties;

            mentors.push({
                email : data.Email.email,
                picture : data.Picture.files[0].file.url,
                timeSlots : expandTimeSlots(data.TimeSlots.rich_text[0].plain_text),
                description : data.Description.rich_text[0].plain_text,
                name: data.Name.title[0].plain_text,
            });
        }
        // res.status(200).json(mentors);
        return mentors;
    } catch (e) {
        console.error(e);

        // res.status(400).json({
        //     status: "Error",
        //     information: e,
        // });
        return e;
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

export default getMentors;

