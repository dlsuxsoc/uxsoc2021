import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import styles from "../styles/Home.module.css";

export default function Index() {
    return (
        <Layout active={0}>
            <SEO title={"Home"} />
        </Layout>
    );
}
