import React from "react";
import Head from "next/head";

const SEO = ({ title, desc }) => {
    return (
        <Head>
            <title> {title} | User Experience Society - DLSU</title>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
    );
};

export default SEO;
