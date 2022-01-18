import Head from 'next/head'
import Image from "next/image";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import faker from "faker";
import styles from "../../styles/Slug.module.scss";
import ContentfulApi from "./../api/utils/contentfulApi";
import { DateTime } from "luxon";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useEffect, useState } from "react";

export default function ArticlesPost({ active, title, authors, content, date }) {
    //console.log (content.json);
    console.log (DateTime.fromISO(date).c)
    return (
        <Layout active={-1}>
            <SEO title={"Articles Post"} />
            <div className="w-full md:w-2/3 mt-32 mb-64 mx-auto min-h-full bg-white shadow-xl relative z-10">
                <div className="pb-3 lg:pb-0">
                    <h1 className={`${styles.title}font-bold text-2xl md:text-5xl pl-8 lg:pl-32 pr-8 lg:pr-72 text-center text-black pt-12 lg:pt-24 pb-4 md:pb-14 lg:text-left`}>{title}</h1>
                </div>
                <p className={`${styles.date} italic pb-14 lg:px-32 text-center lg:text-left md:block hidden`}>{DateTime.fromISO(date).toFormat("DDD")} </p>
                <div className="pb-4 lg:pb-10 lg:pl-32 flex flex-col lg:flex-row items-center lg:items-start">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                        <Image
                            src={faker.image.nature()}
                            alt="lmao"
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                            
                        />
                    </div>
                    <div className="flex flex-row items-center justify-center h-12 lg:pl-6">
                        <p className={`${styles.author}`}>{authors}</p>
                    </div>
                </div>

                {/* <hr className="mx-4 md:mx-32"></hr> */}

                <p className={`${styles.blogtext} px-8 pb-12 lg:px-32 text-left`}>{documentToReactComponents(content.json)}</p>
            </div>
            <div className="fixed left-0 top-0 h-48 md:h-80 w-full lg:h-44 2xl:h-96 shadow-lg">
                <Image
                    src={faker.image.nature()}
                    alt="lmao"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                />
            </div>

        </Layout>
    );
}




export async function getStaticPaths() {
    const { data } = await ContentfulApi.getArticles(0);
    console.log(data);
    const foo = {
        paths: data.articleCollection.items.map((item) => ({
            params: {
                slug: item.slug
            }
        })),
        fallback: false,
    };

    console.log(JSON.stringify(foo, null, ' '));
    return foo;
}

export async function getStaticProps(context) {
    const { data } = await ContentfulApi.getArticles(0);
    const { params } = context;
    return {
        props: data.articleCollection.items.find((item) => item.slug === params.slug),
    };
}