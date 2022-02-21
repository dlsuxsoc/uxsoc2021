import React from "react";
import Head from "next/head";

const SEO = ({ title, description = "", slug = "" }) => {
  const URL = "dlsuuxsoc.netlify.app";
  return (
    <Head>
      <title> {title} | User Experience Society - DLSU</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/images/uxsoc-logo.png" />

      <meta name="og:title" property="og:title" content={title} />
      <meta
        name="og:description"
        property="og:description"
        content={description}
      />
      <meta
        name="og:image"
        property="og:image"
        content="/images/uxsoc-logo.png"
      />
      <meta name="og:url" property="og:url" content={`${URL}/${slug}`} />

      <meta name="twitter:card" property="twitter:card" content={description} />
      <meta name="twitter:title" property="twitter:title" content={title} />
      <meta
        name="twitter:description"
        property="twitter:description"
        content={description}
      />
      <meta
        name="twitter:url"
        property="twitter:url"
        content={`${URL}/${slug}`}
      />
      <meta
        name="twitter:image"
        property="twitter:image"
        content="/images/uxsoc-logo.png"
      />
    </Head>
  );
};

export default SEO;
