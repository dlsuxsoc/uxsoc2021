import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/layout";
import EventItem from "../../components/EventItem/EventItem";
import DateTabs from "../../components/DateTabs/DateTabs";
import data from "../../data/dates.json";
import SEO from "../../components/seo";
import styles from "../../styles/Home.module.css";
import eventPicture from "../../public/images/temp-event.png";
import { useEffect, useState } from "react";

export default function Events({ active }) {
  // const event = {
  //   year1: [
  //     {
  //       title: "UXSCOC General Assembly",
  //       description: "This is UXSOC's first general assembly!",
  //     },
  //     { title: "UXSOCxUXPH", description: "Collab event!" },
  //     {
  //       title: "Shifting to a UX Career",
  //       description: "An event on shifting careers to a career in UX!",
  //     },
  //   ],
  //   year2: [
  //     { title: "Vince", description: "Esqui" },
  //     { title: "Wilfred", description: "Frederick" },
  //   ],
  // };
  //  const [eventItems, setEventItems] = useState(events.year1);

  const newEvents = [
    {
      date: "11/12/2019",
      title: "UXSCOC General Assembly",
      description: "This is UXSOC's first general assembly!",
    },
    {
      date: "1/28/2022",
      title: "Accessibility Talks",
      description: "Learn more about accessbility in UX.",
    },
    {
      date: "11/12/2021",
      title: "State of UX Philippines",
      description: "State of the UX, November 2021 Edition.",
    },
    {
      date: "12/10/2021",
      title: "Intro to UX",
      description: "An event for UX beginners.",
    },
    {
      date: "1/24/2020",
      title: "UX Career Shifting",
      description: "Learn about switching to a UX Career!",
    },
    {
      date: "6/4/2022",
      title: "UXSOC Taft - Rebranding Event",
      description: "DLSU UXSOC is now UXSOC Taft!",
    },
  ];

  const [year, setYear] = useState("All"); // selected date
  const [events, setEvents] = useState(newEvents);

  useEffect(() => {
    setEvents(
      newEvents.filter((item) => {
        return item.date.split("/")[2] === year || year === "All";
      })
    );
  }, [year]); // will run for every change ng dependency array

  useEffect(() => {}, []); // on load

  useEffect(() => {}); // endless

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
          <p className="whitespace-nowrap">
            July 9-12, 2019 · 08:00am - 05:00pm
          </p>
          <p className="pb-8 ">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi{" "}
          </p>
          <button className="bg-green rounded-md font-bold cursor-pointer py-4 px-20">
            Learn More
          </button>
        </div>
      </section>

      <section className="flex lg:pr-32 flex-col-reverse lg:flex-row">
        <ul className="px-4 sm:px-32 flex flex-wrap justify-start w-full md:w-4/5">
          {/* {eventItems.map(({ title, description }) => {
                        return (<EventItem title={title} description={description} />)
                    })} */}

          {events.map(({ title, description }, index) => (
            <EventItem key={index} title={title} description={description} />
          ))}
        </ul>

        <section className="w-16 pr-5 pt-8">
          {/* <DateTabs setEventItems={setEventItems} events={events} /> */}
          {data.map((item, index) => (
            <DateTabs
              key={index}
              year={item.year}
              active={item.year === year}
              set={setYear}
            />
          ))}
        </section>
      </section>
    </Layout>
  );
}
