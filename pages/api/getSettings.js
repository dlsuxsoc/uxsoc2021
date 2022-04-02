import { notion } from "../../api/notion";

const getSettings = async (req, res) => {
    try {
        const { results } = await notion.databases.query({ database_id: process.env.NOTION_SETTINGS });
        var settings = {};
        // Obtain settings
        results.map((setting) => {
            var data = setting.properties;
            settings[data.Property.title[0].text.content] = data.Value.rich_text[0].text.content;
        })

        return settings;
    } catch (e) {
        console.error(e);
        return e;
    }
}

export default getSettings;