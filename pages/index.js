import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import axios from "axios";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";

export default function Index() {
    return (
        <Layout active={0}>
            <SEO title={"Home"} />
            {/* Hero */}
            <section className="px-4 sm:px-32 py-2 mt-36 mb-16 lg:mb-36 flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center h-auto">    
                {/* Header */}
                <div className="w-full lg:w-1/2 pr-0 lg:pr-28 pb-2">
                    <h1 className="text-black text-4xl lg:text-6xl mb-6 lg:mb-12">
                        Lorem Ipsum Dolor
                    </h1>
                    <p className="text-base lg:text-2xl">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                    </p>
                </div>

                {/* Image */}
                <div className="w-full lg:w-1/2 pb-3 lg:pb-0">
                    <Image
                        src="https://via.placeholder.com/566x319"
                        alt="Placeholder-Hero"
                        width={566}
                        height={319}
                    />
                </div>
            </section>
            
            {/* About UX */}
            <section className="px-4 sm:px-32 py-2 mb-16 lg:mb-36 flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center h-auto">    
                {/* Image */}
                <div className="w-full lg:w-1/2 pb-2 pr-0 lg:pr-20">
                    <Image
                        src="https://via.placeholder.com/489x311"
                        alt="Placeholder-About"
                        width={489}
                        height={311}
                    />
                </div>
                
                {/* Header and Text */}
                <div className="w-full lg:w-1/2 pb-3 lg:pb-0">
                    <h1 className="text-black text-3xl lg:text-5xl mb-6 lg:mb-12">About UX Society DLSU</h1>
                    <p className="text-base lg:text-xl mb-4">
                        The UX Society - DLSU Chapter is one of the many recognized UX Societies in the same network. 
                        There's UX Society ADMU, Davao, Orange County and the latest, UX Society AIM-Chapter.
                    </p>
                    <p className="text-base lg:text-xl mb-4">
                        UX Society - DLSU aids various organizations by creating quality products and services by applying 
                        principles, concepts and methodologies in such strategies. We hold workshops, seminars and conferences 
                        to train members about the essentials skills of proper UX discipline and methodologies.
                    </p>
                </div>
            </section>

            {/* Events */}
            <section className="px-4 sm:px-32 py-2 mb-16 lg:mb-36 flex flex-col justify-center items-start h-auto">    
                {/* Header */}
                <div className="w-full lg:w-1/2 pb-3 lg:pb-0">
                    <h1 className="text-black text-3xl lg:text-5xl mb-6 lg:mb-12">Events</h1>
                </div>

                {/* Event Posts */}
                <section className="flex flex-col lg:flex-row">
                    {/* Post */}
                    <div className="w-full lg:w-1/2 pb-2 pr-0 lg:pr-20 items-center">
                        <Image
                            src="https://via.placeholder.com/307x186"
                            alt="Placeholder-Event"
                            width={307}
                            height={186}
                        />

                        <h2 className="text-black text-base lg:text-xl my-4">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                        </h2>
                        <p className="text-sm lg:text-base mb-4">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                        </p>
                    </div>

                    <div className="w-full lg:w-1/2 pb-2 pr-0 lg:pr-20 items-center">
                        <Image
                            src="https://via.placeholder.com/307x186"
                            alt="Placeholder-Event"
                            width={307}
                            height={186}
                        />

                        <h2 className="text-black text-base lg:text-xl my-4">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                        </h2>
                        <p className="text-sm lg:text-base mb-4">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                        </p>
                    </div>

                    <div className="w-full lg:w-1/2 pb-2 pr-0 lg:pr-20 items-center">
                        <Image
                            src="https://via.placeholder.com/307x186"
                            alt="Placeholder-Event"
                            width={307}
                            height={186}
                        />

                        <h2 className="text-black text-base lg:text-xl my-4">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                        </h2>
                        <p className="text-sm lg:text-base mb-4">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                        </p>
                    </div>
                </section>
            </section>
        </Layout>
    );
}
