import Head from 'next/head'
import Image from "next/image";
import Layout from "../../components/layout";
import ArticleItem from '../../components/ArticleItem/ArticleItem';
import DateTabs from '../../components/DateTabs/DateTabs';
import SEO from "../../components/seo";
import data from "../../data/dates.json";
import styles from "../../styles/Home.module.css";
import eventPicture from '../../public/images/temp-event.png'
import { useEffect, useState } from "react";

export default function Events({ active, year }) {
    return (
        <Layout active={4}>
            <SEO title={"Articles"} />

            <h1 className="pl-32 lg:pl-32 py-24">Articles</h1>



            <section className="flex flex-row">
                <section className="md:flex-row-reverse">
                    <ArticleItem />
                    <ArticleItem />
                    <ArticleItem />
                </section>

                <section className="w-16 pr-5 pt-8">
                    {/* <DateTabs setEventItems={setEventItems} events={events} /> */}
                    {data.map((item, index) => (
                        <DateTabs active={index == active} year={item.year} />
                    ))}
                </section>
            </section>
        </Layout>
    );
}

