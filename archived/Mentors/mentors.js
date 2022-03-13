import Image from "next/image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import getMentors from "./api/getMentors";
import mentorshipInstanceExists from "../helpers/mentorshipInstanceExists";

export default function Index({ mentors }) {
  const router = useRouter();

  return (
    <Layout active={5}>
      <SEO
        title={"Mentors"}
        description="Get to know and learn from professionals in the academe and industry"
        slug="mentors"
      />

      {/* Our Mentors */}
      <section className="px-4 sm:px-8 lg:px-32 py-2 mt-28 xl:mt-36 mb-16 lg:mb-36 justify-center lg:justify-between items-center h-auto">
        {/* Header */}
        <div className="text-center pb-2">
          <h1 className=" text-3xl lg:text-5xl mb-6 lg:mb-12">Our mentors</h1>
          <p className="text-base lg:text-lg 2xl:text-xl mb-6 lg:mb-12 lg:w-1/2 mx-auto">
            Get to know and learn from professionals in the academe and industry
          </p>

          {/*Mentors Container*/}
          <div className="flex flex-row flex-wrap gap-10 justify-center">
            {/* Mentor */}
            {mentors.map((item, index) => {
              return (
                <div className="w-full md:w-1/3 xl:w-1/4" key={index}>
                  {/* Mentor Avatar */}
                  <div className="mx-auto relative w-48 h-48">
                    <Image
                      className="rounded-full shadow-md"
                      src={item.picture}
                      alt={item.name}
                      unoptimized={true}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>

                  <div className="mt-2">
                    <h2 className=" text-xl mb-2">{item.name}</h2>
                    <p className="text-base mb-2">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getServerSideProps() {
  const mentorData = await getMentors();
  return {
    props: {
      mentors: mentorData,
    },
  };
}
