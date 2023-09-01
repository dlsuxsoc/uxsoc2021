import { notion } from "../../api/notion";

const getEvents = async (req, res) => {
    try {
        const { results: events }   = await notion.databases.query({
            database_id: process.env.NOTION_EVENTS,
            sorts: [
                {
                    "property": "Date",
                    "direction": "descending"
                }
            ]
        });

        let eventList = events.map((event) => {
            var data = event.properties;
            var image = data.Image.files.length > 0 ? data.Image.files[0] :
                {
                    name: "filler_img",
                    file: {
                        url: "/images/event_placeholder.png"
                    }
                }
            return{
                title: data.Title.title[0].text.content,
                description: data.Description.rich_text[0].text.content,
                dateStart: data.Date.date.start,
                dateEnd: data.Date.date.end,
                location: data.Location.rich_text[0].text.content,
                lumaLink: data.Luma.url,
                lumaEventID: data.LumaEventID.rich_text[0].text.content,
                concluded: data.Concluded.checkbox,
                image
            }
        })
        return eventList;
    }
    catch (e) {
        console.error(e);
        return e;
    }
}

export const config = {
    api: {
        bodyParser: {
            sizeLimit: "1mb",
            externalResolver: true,
        },
    },
};

export default getEvents;