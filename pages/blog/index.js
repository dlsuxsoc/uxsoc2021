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

export default function Articles({ active }) {
    const newArticles = [
        {
            date: "11/12/2019",
            title: "UXSOC starts fresh with an Intro to UX talk",
            description: "Along with UXSOC DLSU's new set of officers for A.Y 2021-2022, they are set to bring the org from the ground up.",
        },
        {
            date: "1/28/2022",
            title: "Accessibility Talks",
            description: "Learn more about accessbility in UX.",
        },
        {
            date: "11/12/2021",
            title: "State of UX Philippines",
            description: "State of the UX, November 2021 Edition.",
        },
        {
            date: "12/10/2021",
            title: "Intro to UX",
            description: "An event for UX beginners.",
        },
        {
            date: "1/24/2020",
            title: "UX Career Shifting",
            description: "Learn about switching to a UX Career!",
        },
        {
            date: "6/4/2022",
            title: "UXSOC Taft - Rebranding Event",
            description: "DLSU UXSOC is now UXSOC Taft!",
        },
    ];

    const [year, setYear] = useState("All"); // selected date
    const [articles, setArticles] = useState(newArticles);

    useEffect(() => {
        setArticles(
            newArticles.filter((item) => {
                return item.date.split("/")[2] === year || year === "All";
            })
        );
    }, [year]); // will run for every change ng dependency array


    return (
        <Layout active={4}>
            <SEO title={"Articles"} />

            <h1 className="pl-32 lg:pl-32 py-24">Articles</h1>

            <section className="flex flex-col-reverse lg:flex-row">
                <ul className="md:flex-row-reverse">
                    {newArticles.map(({ title, description, date }, index) => (
                        <ArticleItem key={index} title={title} description={description} date={date}/>
                    ))}
                </ul>

                <section className="w-16 pr-5 pt-8">
                    {data.map((item, index) => (
                        <DateTabs
                            key={index}
                            year={item.year}
                            active={item.year === year}
                            set={setYear}
                        />
                    ))}


                </section>
            </section>
        </Layout>
    );
}

