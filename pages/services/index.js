import Image from "next/image";
import Layout from "../../components/layout";
import ServiceItem from "../../components/ServiceItem/ServiceItem";
import ProjectItem from "../../components/ProjectItem/ProjectItem";
import SEO from "../../components/seo";
import { useEffect, useState } from "react";
import faker from "faker";
import ContentfulApi from "./../api/utils/contentfulApi";

const getYears = (events) => {
  const years = events.map((item) =>
    new Date(item.dateStart).getFullYear().toString()
  );
  return years.filter((item, index, self) => self.indexOf(item) === index);
};

export default function Services({ active, projects }) {
  console.log({ ...projects });

  return (
    <Layout active={-1}>
      <SEO title={"Services"} />

      <section className="sm:px-8 lg:px-32 flex flex-col justify-center items-center h-auto min-h-screen">
        <h1 className="text-black pt-16 pb-8 text-center">Our services</h1>
        <section className="flex flex-col md:flex-row w-full h-full">
          <ServiceItem
            title={"Web Design & Development"}
            description={
              "Creation of custom web designs from scratch and development using the best front-end technologies."
            }
            file={"/images/services-web-design-&-development.png"}
          />
          <ServiceItem
            title={"UX Education & Training"}
            description={
              "Learning more about User Experience, Experience Design, Design Strategy, Design Thinking, and many other UX related terms."
            }
            file={"/images/services-ux-education-&-training.png"}
          />
          <ServiceItem
            title={"Community Engagement"}
            description={
              "Participation and volunteering work to different external events such as workshops & design conferences."
            }
            file={"/images/services-community-engagement.png"}
          />
        </section>
      </section>

      <section>
        <div className="pb-3 lg:pb-0">
          <h1 className="text-black md:pt-8 pb-6 text-center lg:pl-24 lg:text-left">
            Projects
          </h1>
        </div>

        <section>
          {projects.slice(0, 3).map((item, index) => {
            return <ProjectItem item={item} key={index} />;
          })}
        </section>
      </section>
    </Layout>
  );
}

const getProjectData = async () => {
  const { data } = await ContentfulApi.getProjects(0);

  return data.projectCollection.items;
};

export async function getStaticProps() {
  const projectData = await getProjectData();

  return {
    props: {
      projects: projectData,
    },
  };
}
