import { notion } from "../../api/notion";

const getProjects = async (req, res) => {
    try {
        const { results: projects } = await notion.databases.query({
            database_id: process.env.NOTION_PROJECTS,
            sorts: [
                {
                    "property": "Title",
                    "direction": "ascending"
                }
            ]
        });

        const projects_list = projects.map((project) => {
            const data = project.properties;
            const image = data.imageURL.rich_text.length > 0 ? 
                {
                    url: data.imageURL.rich_text[0].text.content 
                } :
                {
                    url: "/images/placeholder.png"
                }
            return ({
                title: data.Title.title[0].text.content,
                description: data.Description.rich_text[0].text.content,
                previewText: data.previewText.rich_text[0].text.content,
                image,
                slug: data.Slug.rich_text[0].text.content,
            });
        });
        return projects_list;
    }
    catch (e) {
        console.error(e);
        return null;
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

export default getProjects;