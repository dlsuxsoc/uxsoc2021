import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import axios from "axios";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";

export default function Index() {
    const [userList, getUserList] = useState([{ name: "test", gavin: "test" }]);
    console.log(typeof userList);

    async function fetchData() {
        const res = await axios.get("/api/getMembers");
        getUserList(res.data);
    }

    useEffect(() => {
        //    console.log(getMembers());
        fetchData();
    }, [userList]);

    return (
        <Layout active={0}>
            <SEO title={"Home"} />
            <h1>Heading 1</h1>
            <ul>
                {userList.map((it, index) => (
                    <li key={index}>{it.name}</li>
                ))}
            </ul>
        </Layout>
    );
}
