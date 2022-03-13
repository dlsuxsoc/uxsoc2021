import Layout from "../components/layout";
import SEO from "../components/seo";
import { useRef } from "react";
import ContentfulApi from "./api/utils/contentfulApi";
import Hero from "../sections/Home/Hero";
import AboutUs from "./../sections/Home/AboutUs";
import Articles from "../sections/Home/Articles";
import Projects from "../sections/Home/Projects";

export default function Index({ articles, projects, events }) {
  const aboutRef = useRef(null);

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
      <Hero refProp={aboutRef} />
      <AboutUs refProp={aboutRef} />
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
