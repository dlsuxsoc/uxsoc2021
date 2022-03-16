import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/Layout/Layout";
import ArticleItem from "../../components/ArticleItem/ArticleItem";
import DateTabs from "../../components/DateTabs/DateTabs";
import SEO from "../../components/seo";
import styles from "../../styles/Event.module.scss";
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
      <SEO title={"Articles"} slug="blog" />

      <h1 className="container line-clamp-4 text-center lg:pl-32 py-24 lg:text-left">
        Articles
      </h1>

      <section className="container flex flex-col-reverse lg:flex-row lg:items-stretch">
        <ul className="md:justify-start justify-center w-full">
          {articles.map((item, index) => (
            <ArticleItem item={item} key={index} />
          ))}
        </ul>

        <div className="flex flex-row w-full justify-center mb-8">
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
        </div>

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

export async function getServerSideProps() {
  const { data } = await ContentfulApi.getArticles(0);
  return { props: { contentfulArticles: data.articleCollection.items } };
}
