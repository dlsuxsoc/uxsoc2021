module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "via.placeholder.com",
      "placeimg.com",
      "images.ctfassets.net",
      "s3.us-west-2.amazonaws.com",
    ],
  },
  distDir: "out",
  async redirects(){
    return [
      {
        source: "/",
        destination: "/comingsoon",
        permanent: true
        },
        {
          source: "/about",
          destination: "/comingsoon",
          permanent: true
        },
        {
          source: "/services",
          destination: "/comingsoon",
          permanent: true
          },
        {
          source: "/apply",
          destination: "/comingsoon",
          permanent: true
        },
        {
          source: "/articles",
          destination: "/comingsoon",
          permanent: true
        },

    ]
  },
  env: {
    WEBHOOK_MEM_APP: process.env.WEBHOOK_MEM_APP,
  },
};
