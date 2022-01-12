import Head from 'next/head'
import Image from "next/image";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import faker from "faker";
import ContentfulApi from "./../api/utils/contentfulApi";
import { useEffect, useState } from "react";

export default function ArticlesPost({ active, title, authors, slug }) {
    return (
        <Layout active={-1}>
            <SEO title={"Articles Post"} />
            <div className="w-full md:w-3/4 mt-32 mb-64 mx-auto min-h-full bg-white rounded-md shadow-xl relative z-10">
                <div className="pb-3 lg:pb-0">
                    <h1 className="text-2xl md:text-5xl px-8 text-center text-black lg:px-32 pt-16 pb-4 md:pb-8 lg:text-left">{title}</h1>
                </div>
                <p className="italic pb-8 lg:px-32 text-center lg:text-left md:block hidden">{slug}</p>
                <div className="pb-4 lg:pl-32 flex flex-col lg:flex-row items-center lg:items-start">
                    <div className="relative w-16 h-16 rounded-full">
                        <Image
                            src={faker.image.nature()}
                            alt="lmao"
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                        />
                    </div>
                    <p className="pt-4 md:pt-0 md:pb-16 lg:pl-4 lg:pt-4">{authors}</p>
                </div>

                <hr className="mx-4 md:mx-32"></hr>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                
            </div>
            <div className="fixed left-0 top-0 h-48 md:h-80 w-full lg:h-44 2xl:h-72 shadow-lg">
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