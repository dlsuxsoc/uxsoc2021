import Head from 'next/head'
import Image from "next/image";
import Layout from "../../components/layout";
import EventItem from '../../components/EventItem/EventItem';
import DateTabs from '../../components/DateTabs/DateTabs';
import SEO from "../../components/seo";
import styles from "../../styles/Home.module.css";
import eventPicture from '../../public/images/temp-event.png'
import { useEffect, useState } from "react";

export default function Events() {
    const events = {
        year1: [{title: "Gavin", description: "AP Malphite"}, {title: "Tyrone", description: "TJ Sta Maria"}],
        year2: [{title: "Vince", description: "Esqui"}, {title: "Wilfred", description: "Frederick"}]
    }

    const [eventItems, setEventItems] = useState(events.year1)
    
    return (
        <Layout active={3}>
            <SEO title={"Events"} />

            <h1 className="pl-32 py-12">Events</h1>

            {/* <div className={`${styles.container} `}>
                <div>
                    
                </div>
            </div> */}
            <section className="px-4 sm:px-32 py-2 flex flex-col md:flex-row justify-between">    
                <div className="relative pd">
                    <div className="w-96 h-72">
                        <Image
                                src={eventPicture}
                                alt="Placeholder"
                                layout="fill"
                                objectFit="contain"
                                objectPosition="center"
                            />
                    </div>
                </div>
                
                <div className=" md:pl-16 lg:pl-32">
                    <h1 className="mb-8 sm:pd-2">Lorem Ipsum Dolor</h1>
                    <p className="whitespace-nowrap">July 9-12, 2019 · 08:00am - 05:00pm</p>
                    <p className="pb-8 ">Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                                sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                                                magna aliquam erat volutpat. Ut wisi </p>
                    <button className="bg-green rounded-md font-bold cursor-pointer py-4 px-20">Learn More</button>
                </div>
                
            </section>

            <section>
                <DateTabs setEventItems={setEventItems} events={events}/>
            </section>

            <button onClick={()=>setEventItems(events.year2)}>HELLO</button>

            <section className="px-4 sm:px-32 flex flex-wrap justify-start w-full md:w-4/5">
                {eventItems.map(({title, description})=>{
                    return (<EventItem title={title} description={description}/>)
                    })}
                {/* <EventItem/>
                <EventItem/>
                <EventItem/>
                <EventItem/>
                <EventItem/>
                <EventItem/> */}
            </section>

            
        </Layout>
    );
}

