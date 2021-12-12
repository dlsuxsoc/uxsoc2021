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
      new Date(item.dateStart).getFullYear().toString()
    );
    return years.filter((item, index, self) => self.indexOf(item) === index);
  };  

export default function Articles({ active, contentfulArticles }) {

    console.log ({...contentfulArticles[0]});
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
                    new Date(item.dateStart).getFullYear().toString() === year ||
                    year === "All"
                );
            });
        });
    }, [year]); // will run for every change ng dependency array

    return (
        <Layout active={4}>
            <SEO title={"Articles"} />

            <h1 className="pl-32 lg:pl-32 py-24">Articles</h1>

            <section className="flex flex-col-reverse lg:flex-row">
                <ul className="md:flex-row-reverse">
                    {articles.map(({ title, description, date }, index) => (
                        <ArticleItem key={index} title={title} description={description} date={date} />
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
                    {yearList.map((item, index) => (
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

export async function getStaticProps() {
    const { data } = await ContentfulApi.getArticles(0);
    return { props: { contentfulArticles: data.articleCollection.items } };
}
