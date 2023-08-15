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
    <Layout active={3}>
      <SEO title={"Articles"} slug="blog" />

      <section className="container">
        <h1 className="w-line-clamp-4 text-center pt-24 pb-10 lg:text-left lg:px-14 xl:px-20">
          Articles
        </h1>

        <div className="flex flex-col-reverse lg:flex-row justify-center lg:justify-start text-left lg:space-x-14 lg:px-14 xl:px-20 xl:space-x-40">
          <ul>
            {articles.map((item, index) => (
              <ArticleItem item={item} key={index} />
            ))}
          </ul>

          {/* Dropdown Filter */}
          <div className="flex flex-row w-full justify-center mb-8 lg:hidden">
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

          {/* Side Filter */}
          <div className="lg:block hidden pr-5 w-16 mr-96">
            {yearList.map((item, key) => (
              <DateTabs
                key={key}
                year={item}
                active={item === year}
                set={setYear}
              />
            ))}
          </div>

        </div>
      </section>

    </Layout >
  );
}


export async function getServerSideProps() {
  const { data } = await ContentfulApi.getArticles(0);
  return { props: { contentfulArticles: data.articleCollection.items } };
}

/*
export async function getStaticProps() {
  const { data } = await ContentfulApi.getArticles(0);
  return {
    props:
    {
      contentfulArticles: data.articleCollection.items
    },
    revalidate: 300,
  };
}
*/