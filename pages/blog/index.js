import Head from 'next/head'
import Image from "next/image";
import Layout from "../../components/layout";
import ArticleItem from '../../components/ArticleItem/ArticleItem';
import DateTabs from '../../components/DateTabs/DateTabs';
import SEO from "../../components/seo";
import styles from "../../styles/Event.module.scss";
import faker from "faker";
import ContentfulApi from "./../api/utils/contentfulApi";
import { DateTime } from "luxon";
import { useEffect, useState } from "react";

const getYears = (articles) => {
    const years = articles.map((item) =>
      new Date(item.date).getFullYear().toString()
    );
    return years.filter((item, index, self) => self.indexOf(item) === index);
  };  

export default function Articles({ active, contentfulArticles }) {
    
    console.log ({...contentfulArticles});
    const [year, setYear] = useState("All"); // selected date
    const [articles, setArticles] = useState([...contentfulArticles]);
    const [yearList, setYearList] = useState(["All"]);

    useEffect(() => {
        setYearList((yearList) => [
            ...yearList,
            ...getYears([...contentfulArticles]),
        ]);
    }, []);

    useEffect(() => {
        setArticles(() => {
            return contentfulArticles.filter((item) => {
                return (
                    new Date(item.date).getFullYear().toString() === year ||
                    year === "All"
                );
            });
        });
    }, [year]); // will run for every change ng dependency array

    return (
        <Layout active={4}>
            <SEO title={"Articles"} />

            <h1 className="text-center lg:pl-32 py-24 lg:text-left">Articles</h1>

            <section className="flex flex-col-reverse lg:flex-row md:items-stretch items-center">
                <ul className="md:flex-row-reverse md:justify-start justify-center w-full md:w-4/5">
                    {articles.map(({ title, authors, slug }, index) => (
                        <ArticleItem key={index} title={title} authors={authors} slug={slug} />
                    ))}

                    
                </ul>

                <select
                    className={`${styles.customSelect} block lg:hidden w-4/5 py-2 px-3`}
                    onClick={(e) => {
                        setYear(e.target.value);
                    }}
                >
                    {yearList.map((item, key) => (
                        <option key={key} value={item}>
                            {item}
                        </option>
                    ))}
                </select>
                <section className="lg:block hidden pr-5 w-16 mr-96">
                    {yearList.map((item, key) => (
                        <DateTabs
                            key={key}
                            year={item}
                            active={item === year}
                            set={setYear}
                        />
                    ))}
                </section>
            </section>
        </Layout>
    );
}

export async function getStaticProps() {
    const { data } = await ContentfulApi.getArticlesByYear(0);
    return { props: { contentfulArticles: data.articleCollection.items } };
}


