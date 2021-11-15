import Head from 'next/head'
import Image from "next/image";
import Layout from "../../components/layout";
import EventItem from '../../components/EventItem/EventItem';
import SEO from "../../components/seo";
import styles from "../../styles/Home.module.css";
import eventPicture from '../../public/images/temp-event.png'
import { useEffect, useState } from "react";

export default function Events() {
    return (
        <Layout active={3}>
            <SEO title={"Events"} />

            <h1 className="pl-32 py-12">Events</h1>

            {/* <div className={`${styles.container} `}>
                <div>
                    
                </div>
            </div> */}
            <section className="px-4 sm:px-32 py-2 flex flex-wrap sm:flex-column-reverse justify-between">    
                <div className="">
                    <Image
                        src={eventPicture}
                        alt="Placeholder"
                        width={560}
                        height={310}
                    />
                </div>
                
                <div className="w-1/2">
                    <h1 className="text-black text-6xl mb-8 text-white">Lorem Ipsum Dolor</h1>
                    <p className="text-3xl mb-8">July 9-12, 2019 · 08:00am - 05:00pm</p>
                    <p className="text-3xl mb-8 w-3/4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                                sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                                                magna aliquam erat volutpat. Ut wisi </p>
                    <button className="bg-green rounded-md font-bold cursor-pointer py-4 px-20">Learn More</button>
                </div>
                
            </section>

            <section className="sm:px-15 p-8 ml-20 flex flex-wrap sm:flex-column-reverse justify-between w-1/2">
                <EventItem/>
                <EventItem/>
                <EventItem/>
                <EventItem/>
                <EventItem/>
                <EventItem/>
            </section>
        </Layout>
    );
}

