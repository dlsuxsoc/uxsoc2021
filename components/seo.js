import React from "react";
import Head from "next/head";

const SEO = ({ title, desc }) => {
  return (
    <Head>
      <title> {title} | User Experience Society - DLSU</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/images/uxsoc-logo.png" />
    </Head>
  );
};

export default SEO;
