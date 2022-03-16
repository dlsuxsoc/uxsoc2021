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
  // async redirects(){
  //   return [
  //     {
  //       source: "/",
  //       destination: "/comingsoon",
  //       permanent: false
  //       },
  //       {
  //         source: "/about",
  //         destination: "/comingsoon",
  //         permanent: false
  //       },
  //       {
  //         source: "/services",
  //         destination: "/comingsoon",
  //         permanent: false
  //         },
  //       {
  //         source: "/apply",
  //         destination: "/comingsoon",
  //         permanent: false
  //       },
  //       {
  //         source: "/articles",
  //         destination: "/comingsoon",
  //         permanent: false
  //       },

  //   ]
  // },
  env: {
    WEBHOOK_MEM_APP: process.env.WEBHOOK_MEM_APP,
  },
};
