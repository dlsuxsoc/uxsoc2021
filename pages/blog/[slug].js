import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/Layout/Layout";
import SEO from "../../components/seo";
import styles from "../../styles/Slug.module.scss";
import ContentfulApi from "./../api/utils/contentfulApi";
import { DateTime } from "luxon";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useEffect, useState } from "react";

export default function ArticlesPost({
  active,
  title,
  authors,
  content,
  date,
  imagesCollection,
  slug,
}) {
  return (
    <Layout active={-1}>
      <SEO
        title={"Articles Post"}
        description={content.json.content[0].content[0].value}
        slug={`blog/${slug}`}
      />
      <div className="container w-full md:w-2/3 mt-32 mb-64 mx-auto min-h-full bg-white shadow-xl relative z-10">
        <div className="pb-3 lg:pb-0">
          <h1
            className={`${styles.title}font-bold text-2xl md:text-5xl pl-8 lg:pl-32 pr-8 lg:pr-72 text-center  pt-12 lg:pt-24 pb-4 md:pb-14 lg:text-left`}
          >
            {title}
          </h1>
        </div>

        <div className="pb-4 lg:pb-10 lg:pl-32 flex flex-col lg:flex-row items-center lg:items-start">
          <div className="flex  flex-col md:flex-row items-center justify-center h-12">
            <p className={`${styles.author} md:pr-8`}>{authors.join(", ")}</p>

            <p className={`${styles.date} `}>
              {DateTime.fromISO(date).toFormat("DDD")}{" "}
            </p>
          </div>
        </div>

        <p className={`${styles.blogtext} px-8 pb-12 lg:px-32 text-left`}>
          {documentToReactComponents(content.json)}
        </p>
      </div>
      <div className="fixed left-0 top-0 h-48 md:h-80 w-full lg:h-44 2xl:h-96 shadow-lg">
        <Image
          src={imagesCollection.items[0].url}
          alt="lmao"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
    </Layout>
  );
}

// export async function getServerSideProps(context) {
//   const { data } = await ContentfulApi.getArticles(0);
//   const { params } = context;
//   return {
//     props: {
//       ...data.articleCollection.items.find((item) => item.slug === params.slug),
//       slug: params.slug,
//     },
//   };
// }

export async function getStaticProps(context) {
  const { data } = await ContentfulApi.getArticles(0);
  const { params } = context;
  return {
    props: {
      ...data.articleCollection.items.find((item) => item.slug === params.slug),
      slug: params.slug,
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const { data } = await ContentfulApi.getArticles(0);

  const paths = data.articleCollection.items.map((item) => {
    return {
      params: { slug: item.slug }
    };
  });

  return {
    paths,
    fallback: false
  };
}
