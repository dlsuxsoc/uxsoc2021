import { notion } from "../../api/notion";

const getTeam = async (req, res) => {
    try {
        const { results: leads } = await notion.databases.query({
            database_id: process.env.NOTION_LEADS,
            sorts: [
                {
                    "property": "Position",
                    "direction": "descending"
                },
                {
                    "property": "Name",
                    "direction": "ascending"
                }
            ]
        });

        var team = [];

        leads.map((lead) => {
            var data = lead.properties;
            var avatar = data.Avatar.files.length > 0 ? data.Avatar.files[0] :
                {
                    name: "filler_img",
                    file: {
                        url: "/images/person_placeholder.jpg"
                    }
                }
            
            if(data.Position.select.name != 'Founder')
            team.push({
                name: data.Name.title[0].text.content,
                position: data.Position.select.name,
                avatar,
                // Note: Socials can be multiple.
                // Format: [i].name
                socials: data.Socials.multi_select,
            })
        })
        return team;
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

export default getTeam;