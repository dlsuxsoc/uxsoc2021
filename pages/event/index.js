import Image from "next/image";
import Layout from "../../components/layout";
import EventItem from "../../components/EventItem/EventItem";
import DateTabs from "../../components/DateTabs/DateTabs";
import SEO from "../../components/seo";
import styles from "../../styles/Event.module.scss";
import { useEffect, useState } from "react";
import faker from "faker";
import ContentfulApi from "./../api/utils/contentfulApi";
import { DateTime } from "luxon";
import Button from "./../../components/Button/Button";

const getYears = (events) => {
  const years = events.map((item) =>
    new Date(item.dateStart).getFullYear().toString()
  );
  return years.filter((item, index, self) => self.indexOf(item) === index);
};

export default function Events({ active, contentfulEvents }) {
  console.log({ ...contentfulEvents });
  const [year, setYear] = useState("All"); // selected date
  const [events, setEvents] = useState([...contentfulEvents]);
  const [yearList, setYearList] = useState(["All"]);

  const [latestEvent, setLatestEvent] = useState({
    ...events[0],
    dateStart: DateTime.fromISO(contentfulEvents[0].dateStart),
    dateEnd: DateTime.fromISO(contentfulEvents[0].dateEnd),
  });

  useEffect(() => {
    setYearList((yearList) => [
      ...yearList,
      ...getYears([...contentfulEvents]),
    ]);
  }, []);

  useEffect(() => {
    setEvents(() => {
      return contentfulEvents.filter((item) => {
        return (
          new Date(item.dateStart).getFullYear().toString() === year ||
          year === "All"
        );
      });
    });
  }, [year]); // will run for every change ng dependency array

  return (
    <Layout active={3}>
      <SEO title={"Events"} />



      {/* <div className={`${styles.container} `}>
                <div>
                    
                </div>
            </div> */}
      <section className="px-4 sm:px-32 min-w-screen min-h-screen">
        <h1 className="block text-black pt-28 pb-6 text-center lg:text-left">Events</h1>
        <div className="flex flex-col lg:flex-row items-center">
          <div className="relative w-full">
            <div className={`${styles.eventheroimage} w-1/2 lg:w-full`}>
              <Image
                src={faker.image.image()}
                alt="Placeholder"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            </div>
          </div>

          <div className="pt-4 pl-0 md:pl-8 lg:pl-32 w-4/5 md-w-2/3">
            <h2 className="text-left">{latestEvent.title}</h2>
            <p className="whitespace-wrap sm:whitespace-nowrap my-4">
              {
                /** check if same month and day */
                latestEvent.dateEnd.hasSame(latestEvent.dateStart, "day") &&
                  latestEvent.dateEnd.hasSame(latestEvent.dateStart, "month")
                  ? // format when event is only one day
                  `${latestEvent.dateStart.toFormat("DDD")}  
                | ${latestEvent.dateStart.toFormat(
                    "t"
                  )} - ${latestEvent.dateEnd.toFormat("t")}`
                  : // format when event is multiple days
                  `${latestEvent.dateStart.toFormat(
                    "DDD"
                  )} - ${latestEvent.dateEnd.toFormat("DDD")} |  
                ${latestEvent.dateStart.toFormat(
                    "t"
                  )} - ${latestEvent.dateEnd.toFormat("t")}`
              }
            </p>
            <p className="pb-8 ">{latestEvent.description}</p>
            <Button variant="green">Learn More</Button>
          </div>
        </div>

      </section>

      <section className="flex pt-28 pb-36 flex-col-reverse lg:flex-row justify-start md:items-stretch items-center">
        <ul className="px-4 sm:px-32 flex flex-wrap lg:flex-wrap lg:justify-start justify-center lg:w-4/5 w-full">
          {events.map(({ title, description }, index) => (
            <EventItem key={index} title={title} description={description} />
          ))}
        </ul>

        {/* Dropdown for Mobile */}
        <div className="flex flex-row w-full items-center justify-center">
          <select
            className={`${styles.customSelect} block lg:hidden w-4/5 py-2 px-3`}
            onClick={(e) => {
              setYear(e.target.value);
            }} >
            {yearList.map((item, key) => (
              <option key={key} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* Datetab for Desktop */}
        <section className="lg:block hidden pr-5 w-16 mr-64">
          {/* <DateTabs setEventItems={setEventItems} events={events} /> */}
          {yearList.map((item, key) => (
            <DateTabs
              key={key}
              year={item}
              active={item === year}
              set={setYear}
            />
          ))}
        </section>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const { data } = await ContentfulApi.getEvents(0);
  return { props: { contentfulEvents: data.eventCollection.items } };
}