module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "via.placeholder.com",
      "placeimg.com",
      "images.ctfassets.net",
      "s3.us-west-2.amazonaws.com",
      "media.istockphoto.com",
    ],
  },
  distDir: "out",
  env: {
    WEBHOOK_MEM_APP: process.env.WEBHOOK_MEM_APP,
    WEBHOOK_MEM_APP_ALT: process.env.WEBHOOK_MEM_APP_ALT,
  },
};
