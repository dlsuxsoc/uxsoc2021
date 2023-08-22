import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";
import servicesData from "../data/services.json";
import Hero from "../sections/About/Hero";
import MissionVision from "../sections/About/MissionVision";
import Services from "../sections/About/Services";
import JoinUs from "../sections/About/JoinUs";
import Team from "../sections/About/Team";
import getTeam from "../pages/api/getTeam";
import Founders from "../sections/About/Founders"
import getFounders from "./api/getFounders";

export default function About({ leads , founders }) {
  return (
    <Layout active={1}>
      <SEO
        title={"About Us"}
        description="UX Society envisions to be DLSU's premier consulting and
                educational body for User Experience Strategy, particularly in
                technologies that enhance usability, guide human-computer
                interaction, and showcase effective visual design."
        slug="about"
      />

      <Hero />
      <MissionVision />
      <Services servicesData={servicesData} />
      <Team leads={leads} />
      <Founders founders={founders}></Founders>
      <JoinUs />
    </Layout>
  );
}

export async function getServerSideProps() {
  const leads = await getTeam();
  const founders = await getFounders();
  return {
    props: {
      leads,
      founders
    },
  };
}
