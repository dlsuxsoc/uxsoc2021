import Layout from "../components/Layout/Layout";
import Hero from "../sections/Events/Hero";
import SEO from "../components/seo";
import PastEvents from "../sections/Events/PastEvents";
import getEvents from "../pages/api/getEvents";
import UpcomingEvents from "../sections/Events/UpcomingEvents";

// const getYears = (events) => {
//   const years = events.map((item) =>
//     new Date(item.dateStart).getFullYear().toString()
//   );
//   return years.filter((item, index, self) => self.indexOf(item) === index);
// };

export default function Events({ events }) {
  return (
    <Layout active={3}>
      <SEO
        title={"Events"}
        description="UX Society Taft conducts various events centered around 
                    making quality UX education and training accessible to 
                    students in the greater Taft community."
        slug="events"> </SEO>
      <Hero />
      <UpcomingEvents events={events} />
      <PastEvents events={events} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const events = await getEvents();

  return {
    props: {
      events,
    },
  }; 
}
