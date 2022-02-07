import Image from "next/image";
import Layout from "../../components/layout";
import ServiceItem from "../../components/ServiceItem/ServiceItem";
import ProjectItem from "../../components/ProjectItem/ProjectItem";
import SEO from "../../components/seo";
import { useEffect, useState } from "react";
import servicesData from "../../data/services.json";
import faker from "faker";
import ContentfulApi from "./../api/utils/contentfulApi";

const getYears = (events) => {
  const years = events.map((item) =>
    new Date(item.dateStart).getFullYear().toString()
  );
  return years.filter((item, index, self) => self.indexOf(item) === index);
};

export default function Services({ active, contentfulProjects }) {
  return (
    <Layout active={2}>
      <SEO title={"Services"} />

      <section className="sm:px-8 lg:px-32 flex flex-col justify-center items-center h-auto min-h-screen">
        <h1 className="text-black pt-16 pb-8 text-center">Our services</h1>
        <section className="flex flex-col md:flex-row w-full h-full">
          {servicesData.slice(0, 3).map((item, index) => {
            return <ServiceItem item={item} key={index} />;
          })}
        </section>
      </section>

      <section>
        <div className="pb-3 lg:pb-0">
          <h1 className="text-black md:pt-8 pb-6 text-center lg:pl-24 lg:text-left">
            Projects
          </h1>
        </div>

        <section>
          {contentfulProjects.slice(0, 3).map((item, index) => {
            return <ProjectItem item={item} key={index} />;
          })}
        </section>
      </section>
    </Layout>
  );
}

export async function getServerSideProps() {
  const { data } = await ContentfulApi.getProjects(0);
  return { props: { contentfulProjects: data.projectCollection.items } };
}
