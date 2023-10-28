module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "via.placeholder.com",
      "placeimg.com",
      "images.ctfassets.net",
      "s3.us-west-2.amazonaws.com",
      "media.istockphoto.com",
      "lh3.googleusercontent.com",
      "*.s3.us-west-2.amazonaws.com",
      "prod-files-secure.s3.us-west-2.amazonaws.com",
    ],
    remotePatterns:[
      {
        protocol: 'https',
        hostname:"**.s3.us-west-2.amazonaws.com"
      }
    ]
  },
  distDir: "out",
};
