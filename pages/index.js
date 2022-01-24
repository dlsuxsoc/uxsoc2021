import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import axios from "axios";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import articlesData from "../data/dummy-articles.json";
import eventsData from "../data/dummy-events.json";
import projectsData from "../data/dummy-projects.json";
import faker from "faker";
import Button from "../components/Button/Button";
import ContentfulApi from "./api/utils/contentfulApi";
import getRTFContent from "../helpers/getRTFContent";
import Link from "next/link";

export default function Index({ articles, projects, events }) {
  return (
    <Layout active={0}>
      <SEO title={"Home"} />
      {/* Hero */}
      <section className="px-4 sm:px-8 lg:px-32 py-2 flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center h-auto lg:h-screen min-h-screen md:min-h-max">
        {/* Header */}
        <div className="text-center lg:text-left w-full lg:w-1/2 pr-0 lg:pr-28 pb-2">
          <h1 className="text-black text-4xl lg:text-6xl xl:text-5xl 2xl:text-7xl mb-6 lg:mb-12">
            User Experience Society
          </h1>
          <p className="text-base lg:text-2xl 2xl:text-3xl">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
          </p>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 relative mb-8 pb-3 lg:pb-0 h-48 md:h-80">
          <Image
            src="/images/home-1.png"
            alt="Hero Image"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
          />
        </div>
      </section>

      {/* About UX */}
      <section className={`px-4 sm:px-8 lg:px-32 pt-16 flex flex-col lg:flex-row justify-center lg:justify-between items-center h-auto ${styles.aboutBg}`}>
        {/* Image */}
        <div className="relative h-52 md:h-96 w-full lg:w-1/2 mb-6 lg:pb-0 pr-0 lg:mr-10 xl:mr-20 2xl:pr-0 mx-auto text-center">
          <Image
            src="/images/about-ux-1.png"
            alt="About UX Society DLSU"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
          />
        </div>

        {/* Header and Text */}
        <div className="w-full lg:w-1/2 pb-3 lg:pb-0 mb-8">
          <h1 className="text-black text-3xl lg:text-4xl 2xl:text-5xl mb-6 lg:mb-12">
            About UX Society DLSU
          </h1>
          <p className="text-sm md:text-base lg:text-lg 2xl:text-xl mb-4">
            The UX Society - DLSU Chapter is one of the many recognized UX
            Societies in the same network. There's UX Society ADMU, Davao,
            Orange County and the latest, UX Society AIM-Chapter.
          </p>
          <p className="text-sm md:text-base lg:text-lg xl:text-xl mb-16">
            UX Society - DLSU aids various organizations by creating quality
            products and services by applying principles, concepts and
            methodologies in such strategies. We hold workshops, seminars and
            conferences to train members about the essentials skills of proper
            UX discipline and methodologies.
          </p>

          <div className="text-center md:text-left">
            <Button to="/about">Learn More</Button>
          </div>
        </div>
      </section>

      {/* Events */}
      <section className={`px-4 sm:px-8 lg:px-32 py-28 md:py-40 lg:py-48 2xl:py-96 flex flex-col justify-center lg:justify-between items-center lg:items-start h-auto  ${styles.eventBg}`}>
        {/* Header */}
        <div className="pb-3 lg:pb-0">
          <h1 className="text-white text-3xl lg:text-5xl mb-6 lg:mb-12 line-clamp-2">
            Events
          </h1>
        </div>

        {/* Event Posts Container*/}
        <section className="flex flex-col md:flex-row w-full md:justify-between">
          {/* Post */}
          {events.slice(0, 3).map((item, index) => {
            return (
              <div
                className={`text ${
                  index > 0 ? "hidden lg:block" : "block"
                } w-full lg:w-1/3 ${index === 1 ? "mx-8" : ""}`}
                key={index}
              >
                <div className="relative h-48 md:h-96 lg:h-44 2xl:h-72 shadow-lg">
                  <Image
                    src={faker.image.image()}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
                <h2 className="text-center text-white lg:text-left text-base lg:text-xl my-4">
                  {item.title}
                </h2>
                {/* <p className="break-words text-center lg:text-left text-sm lg:text-base mb-4">
                  {item.description}
                </p> */}
              </div>
            );
          })}
        </section>

        <Button to="/event" variant="white" className="self-center lg:self-start">
          Learn More
        </Button>
      </section>

      {/* Articles */}
      <section className="px-4 sm:px-8 lg:px-32 py-2 mb-16 lg:mb-36 flex flex-col justify-center lg:justify-between items-center lg:items-start h-auto">
        {/* Header */}
        <div className="pb-3 lg:pb-0">
          <h1 className="text-black text-3xl lg:text-5xl mb-6 lg:mb-12">
            Articles
          </h1>
        </div>

        {/* Articles Container*/}
        <section className="w-full flex flex-col lg:flex-row items-start">
          {/* Big Article */}
          <div className="w-full lg:w-1/2 pr-0 lg:pr-20 xl:pr-28 text-center lg:text-left">
            <div className={"relative h-48 md:h-96 lg:h-44 2xl:h-96 shadow-lg"}>
              <Image
                src={articles[0].imagesCollection.items[0].url}
                alt={articles[0].title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <Link href={`/blog/${articles[0].slug}`}>
              <a className="line-clamp-2 text-black font-bold text-base md:text-xl lg:text-2xl py-2 inline-block hover:underline">
                {articles[0].title}
              </a>
            </Link>
            <p className="break-words line-clamp-3 text-sm lg:text-base mb-4">
              {getRTFContent(articles[0])}
            </p>
          </div>

          {/* Small Articles */}
          <div className="lg:w-1/2 lg:flex hidden flex-col items-start">
            {/* Article */}
            {articles.slice(1, 3).map((item, index) => {
              return (
                <div className="w-full pb-8 flex flex-row items-start" key={index}>
                  <div
                    className={`w-1/3 relative lg:h-28 2xl:h-44 shadow-lg`}
                  >
                    <Image
                      src={item.imagesCollection.items[0].url}
                      alt={item.title}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>

                  <div className="w-2/3 flex flex-col pl-8">
                    <Link href={`/blog/${item.slug}`}>
                    <a className="line-clamp-2 text-black text-base lg:text-xl mb-4 hover:underline font-bold">
                      {item.title}
                    </a>
                    </Link>
                    <p className="break-words line-clamp-4 text-xs lg:text-sm">
                    {getRTFContent(item)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <Button to="/blog" className="self-center lg:self-end">
          Learn More
        </Button>
      </section>

      {/* Projects */}
      <section className="px-4 sm:px-8 lg:px-32 py-2 mb-16 lg:mb-36 flex flex-col justify-center lg:justify-between items-center h-auto">
        {/* Header */}
        <div className="pb-3 lg:pb-0">
          <h1 className="text-black text-3xl lg:text-5xl mb-6 lg:mb-12">
            Projects
          </h1>
        </div>

        {/* Projects Container*/}
        <section className="flex flex-col md:flex-row w-full md:justify-between lg:mb-5">
          {/* Project */}

          {projects.slice(0, 3).map((item, index) => {
            return (
              <div
                className={`text-center ${
                  index > 0 ? "hidden lg:block" : "block"
                } w-full lg:w-1/3 ${index === 1 ? "mx-8" : ""}`}
                key={index}
              >
                <div className="relative h-48 md:h-96 lg:h-44 2xl:h-72 shadow-lg">
                  <Image
                    src={item.image.url}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>

                {/* Project Text */}
                <h2 className="text-black text-base lg:text-xl my-4 line-clamp-2">
                  {item.title}
                </h2>
                <p className="break-words text-sm lg:text-base mb-4 line-clamp-4">{item.description}</p>
              </div>
            );
          })}
        </section>

        <Button to="/project">Learn More</Button>
      </section>
    </Layout>
  );
}

const getArticleData = async () => {
  const { data } = await ContentfulApi.getArticles(0);

  return data.articleCollection.items;
};

const getProjectData = async () => {
  const { data } = await ContentfulApi.getProjects(0);

  return data.projectCollection.items;
};

const getEventData = async () => {
  const { data } = await ContentfulApi.getEvents(0);

  return data.eventCollection.items;
};

export async function getStaticProps() {
  const articleData = await getArticleData();
  const projectData = await getProjectData();
  const eventData = await getEventData();

  return {
    props: {
      articles: articleData,
      projects: projectData,
      events: eventData,
    },
  };
}
