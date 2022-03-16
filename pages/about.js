import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";
import servicesData from "../data/services.json";
import Hero from "../sections/About/Hero";
import MissionVision from "../sections/About/MissionVision";
import Services from "../sections/About/Services";
import JoinUs from "../sections/About/JoinUs";

export default function About() {
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
      <JoinUs />
    </Layout>
  );
}
