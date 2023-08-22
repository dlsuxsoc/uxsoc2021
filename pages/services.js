import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";
import ContentfulApi from "./api/utils/contentfulApi";
import Hero from "../sections/Services/Hero";
import Projects from "../sections/Services/Projects";
import getProjects from "./api/getProjects";

const getYears = (events) => {
  const years = events.map((item) =>
    new Date(item.dateStart).getFullYear().toString()
  );
  return years.filter((item, index, self) => self.indexOf(item) === index);
};

export default function Services({ projects }) {
  return (
    <Layout active={2}>
      {/* TODO: add a better description */}
      <SEO
        title={"Services"}
        description="We provide different services"
        slug="services"
      />
      <Hero />
      <Projects projects={projects} />
    </Layout>
  );
}

// export default function Services({ active, contentfulProjects }) {
//   return (
//     <Layout active={2}>
//       {/* TODO: add a better description */}
//       <SEO
//         title={"Services"}
//         description="We provide different services"
//         slug="services"
//       />
//       <Hero />
//       <Projects contentfulProjects={contentfulProjects} />
//     </Layout>
//   );
// }

// export async function getServerSideProps() {
//   const { data } = await ContentfulApi.getProjects(0);
//   return { props: { contentfulProjects: data.projectCollection.items } };
// }

export async function getServerSideProps() {
  // const { data } = await ContentfulApi.getProjects(0);
  // console.log(data);
  // console.log(data.projectCollection.items );
  
  const projects = await getProjects();
  console.log(projects);

  return {
    props: {
      projects,
    },
  };
}

/*
export async function getStaticProps() {
  const { data } = await ContentfulApi.getProjects(0);
  return {
    props:
    {
      contentfulProjects: data.projectCollection.items
    },
    revalidate: 300,
  };
}
*/