import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import axios from "axios";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import Button from "../components/Button/Button";
import ContentfulApi from "./api/utils/contentfulApi";
import getRTFContent from "../helpers/getRTFContent";
import Link from "next/link";
import Hero from "../sections/Home/Hero";
import AboutUs from "./../sections/Home/AboutUs";
import Articles from "../sections/Home/Articles";
import Projects from "../sections/Home/Projects";

export default function Index({ articles, projects, events }) {
  return (
    <Layout active={0}>
      <SEO
        title={"Home"}
        description="UX Society - DLSU aids various organizations by creating quality
            products and services by applying principles, concepts and
            methodologies in such strategies. We hold workshops, seminars and
            conferences to train members about the essentials skills of proper
            UX discipline and methodologies."
      />
      <Hero />
      <AboutUs />
      <Articles articles={articles} />
      <Projects projects={projects} />
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

export async function getServerSideProps() {
  const articleData = await getArticleData();
  const projectData = await getProjectData();

  return {
    props: {
      articles: articleData,
      projects: projectData,
    },
  };
}
