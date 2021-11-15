import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import axios from "axios";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";

export default function Index() {
    const [userList, getUserList] = useState([{ name: "test", gavin: "test" }]);


    return (
        <Layout active={0}>
            <SEO title={"Home"} />
            <section className="px-4 sm:px-32 py-2 flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center h-screen">    
                <div className="pr-0 lg:pr-28 pb-2">
                    <h1 className="text-black text-4xl lg:text-6xl mb-6 lg:mb-12">Lorem Ipsum Dolor sit amet</h1>
                    <p className="text-base lg:text-3xl">Lorem ipsum dolor sit amet, consectetuer adipiscing el
                    it, sed</p>
                </div>

                <div className="pb-3 lg:pb-0">
                    <Image
                        src="https://via.placeholder.com/566x319"
                        alt="Placeholder"
                        width={566}
                        height={319}
                    />
                </div>
            </section>
            
        </Layout>
    );
}
