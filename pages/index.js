import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import axios from "axios";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import articlesData from "../data/dummy-articles.json";
import eventsData from "../data/dummy-events.json";
import projectsData from "../data/dummy-projects.json";
import faker from "faker";

export default function Index() {

    return (
        <Layout active={0}>
            <SEO title={"Home"} />
            {/* Hero */}
            <section className="px-4 sm:px-32 py-2 mt-36 lg:mt-0 mb-16 lg:mb-0 flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center h-auto lg:h-screen">    
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
                <div className="w-full lg:w-1/2 pb-3 lg:pb-0 text-center">
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
                <div className="w-full lg:w-1/2 pb-2 pr-0 lg:pr-20 text-center">
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
            <section className="px-4 sm:px-32 py-2 mb-16 lg:mb-36 flex flex-col justify-center lg:justify-between items-center md:items-start h-auto">    
                {/* Header */}
                <div className="pb-3 lg:pb-0">
                    <h1 className="text-black text-3xl lg:text-5xl mb-6 lg:mb-12">Events</h1>
                </div>

                {/* Event Posts Container*/}
                <section className="flex flex-col md:flex-row w-full md:justify-between">
                    {/* Post */}
                    {eventsData.slice(0,3).map((item,index)=> {
                        return (
                            <div className={`text ${index > 0 ? "hidden md:block" : "block"} w-full md:w-1/3 ${index === 1 ? "mx-8": ""}`} key={index}>
                                <div className="relative h-48 md:h-36 lg:h-44 2xl:h-72">
                                    <Image
                                        src={faker.image.image()}
                                        alt="Placeholder-Event"
                                        layout="fill"
                                        objectFit="cover"
                                        objectPosition="center"
                                    />
                                </div>

                                <h2 className="text-black text-base lg:text-xl my-4">
                                    {item.Title}
                                </h2>
                                <p className="text-sm lg:text-base mb-4">
                                    {item.Content}
                                </p>
                            </div>
                        )
                    })}
                </section>
            </section>

            {/* Articles */}
            <section className="px-4 sm:px-32 py-2 mb-16 lg:mb-36 flex flex-col justify-center items-start h-auto">
                {/* Header */}
                <div className="pb-3 lg:pb-0">
                    <h1 className="text-black text-3xl lg:text-5xl mb-6 lg:mb-12">Articles</h1>
                </div>

                {/* Articles Container*/}
                <section className="flex flex-col lg:flex-row items-start">
                    {/* Big Article */}
                    <div className="w-full lg:w-1/2 pb-2 pr-0 lg:pr-20">
                        <Image
                            src={articlesData[0].Images}
                            alt="Placeholder-Event"
                            width={494}
                            height={299}
                        />

                        <h2 className="text-black text-base lg:text-xl my-4">
                            {articlesData[0].Title}
                        </h2>
                        <p className="text-sm lg:text-base mb-4">
                            {articlesData[0].Content}
                        </p>
                    </div>

                    {/* Small Articles */}
                    <div className="w-full lg:w-1/2 pb-2 pr-0 lg:pr-20 sm:flex hidden flex-col items-start">
                        {/* Article */}
                        {articlesData.slice(1,3).map((item,index)=> {
                            return (
                                <div className="pb-2 flex flex-row items-center" key={index}>
                                    <div className="w-1/2 pr-10">
                                        <Image
                                            src={item.Images}
                                            alt="Placeholder-Event"
                                            width={262}
                                            height={158}
                                        />
                                    </div>

                                    <div className="w-1/2 flex flex-col">
                                        <h2 className="text-black text-base lg:text-xl my-4 ">
                                            {item.Title}
                                        </h2>
                                        <p className="text-sm lg:text-base mb-4">
                                            {item.Content}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </section>
            </section>

            {/* Projects */}
            <section className="px-4 sm:px-32 py-2 mb-16 lg:mb-36 flex flex-col justify-center lg:justify-between items-center h-auto">    
                {/* Header */}
                <div className="pb-3 lg:pb-0">
                    <h1 className="text-black text-3xl lg:text-5xl mb-6 lg:mb-12">Projects</h1>
                </div>

                {/* Projects Container*/}
                <section className="flex flex-col md:flex-row w-full md:justify-between">
                    {/* Project */}
                    
                    {projectsData.slice(0,3).map((item,index)=> {
                        return (
                            <div className={`text-center ${index > 0 ? "hidden md:block" : "block"} w-full md:w-1/3 ${index === 1 ? "mx-8": ""}`} key={index}>
                                <div className="relative h-48 md:h-36 lg:h-44 2xl:h-72">
                                    <Image
                                        src={faker.image.image()}
                                        alt="Placeholder-Event"
                                        layout="fill"
                                        objectFit="cover"
                                        objectPosition="center"
                                    />
                                </div>

                                {/* Project Text */}
                                <h2 className="text-black text-base lg:text-xl my-4">
                                    {item.Title}
                                </h2>
                                <p className="text-sm lg:text-base mb-4">
                                    {item.Content}
                                </p>
                            </div>
                        )
                    })}
                </section>
            </section>
        </Layout>
    );
}
