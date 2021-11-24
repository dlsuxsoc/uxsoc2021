import Head from 'next/head'
import Image from "next/image";
import Layout from "../../components/layout";
import ArticleItem from '../../components/ArticleItem/ArticleItem';
import SEO from "../../components/seo";
import styles from "../../styles/Home.module.css";
import eventPicture from '../../public/images/temp-event.png'
import { useEffect, useState } from "react";

export default function Events() {
    return (
        <Layout active={4}>
            <SEO title={"Articles"} />

            <h1 className="pl-32 py-24">Articles</h1>

            {/* <section>
                <DateTabs/>
            </section> */}

            <section className="md:flex-row-reverse">
                <ArticleItem/>
                <ArticleItem/>
                <ArticleItem/>
            </section>

            
        </Layout>
    );
}

