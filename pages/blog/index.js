import Head from 'next/head'
import Image from "next/image";
import Layout from "../../components/layout";
import ArticleItem from '../../components/ArticleItem/ArticleItem';
import DateTabs from '../../components/DateTabs/DateTabs';
import SEO from "../../components/seo";
import styles from "../../styles/Home.module.css";
import eventPicture from '../../public/images/temp-event.png'
import { useEffect, useState } from "react";

export default function Events() {
    return (
        <Layout active={4}>
            <SEO title={"Events"} />

            <h1 className="pl-32 py-12">Articles</h1>

            {/* <section>
                <DateTabs/>
            </section> */}

            <section className="px-4 sm:px-32 flex flex-column justify-start w-full md:w-4/5">
                <ArticleItem/>
                <ArticleItem/>
                <ArticleItem/>
            </section>

            
        </Layout>
    );
}

