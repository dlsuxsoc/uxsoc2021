const { Client } = require("@notionhq/client");
require("dotenv").config({
  path: "./.env.local",
});
console.log(process.env.NOTION_LEADS_PRODDB);
console.log(process.env.NOTION_LEADS_DEVDB);
// Initializing a client
const notion = new Client({
  auth: process.env.NOTION_INTEGRATION_SECRET,
});

async function deleteRecords(databaseId) {
  const response = await queryDb(databaseId);

  console.log(response);

  response.results.forEach(async (item) => {
    await notion.pages.update({
      page_id: item.id,
      archived: true,
    });
  });
}

async function updateDb(sourceDbId, destDbId) {
  const source = await queryDb(sourceDbId);

  for (const item of source.results) {
    const properties = {
      Name: {
        title: [
          {
            text: {
              content: item.properties.Name.title[0].text.content,
            },
          },
        ],
      },

      Position: {
        select: {
          name: item.properties.Position.select.name,
        },
      },

      Avatar: {
        files: [
          {
            name: item.properties.Avatar.files[0]?.name ?? "test.jpg",
            type: item.properties.Avatar.files[0]?.type,
            file: {
              url: item.properties.Avatar.files[0]?.file.url,
            },
          },
        ],
      },
    };

    if (item.properties.Avatar.files.length === 0) {
      delete properties.Avatar;
    }

    await notion.pages.create({
      parent: {
        type: "database_id",
        database_id: destDbId,
      },

      properties,
    });
  }
}

async function queryDb(databaseId) {
  const response = await notion.databases.query({
    database_id: databaseId,
  });

  // console.log(response.results[response.results.length-1].properties.Avatar.files[0].name)
  return response;
}

(async () => {
  await deleteRecords(process.env.NOTION_LEADS_PRODDB);
  await updateDb(
    process.env.NOTION_LEADS_DEVDB,
    process.env.NOTION_LEADS_PRODDB
  );
})();

// queryDb(`bbbd878ff5f6489c8c39e6f54166d31e`)
