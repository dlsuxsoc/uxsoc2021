import React from "react";
import Button from "../../components/Button/Button";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

const AboutUs = () => {
  return (
    <section
      id="about"
      className={`px-4 sm:px-8 lg:px-32 pt-24 sm:pt-32 md:pt-48 lg:pt-36 xl:pt-40 2xl:pt-96 pb-16 lg:pb-36 flex flex-col lg:flex-row justify-center lg:justify-between items-center h-auto ${styles.aboutBg}`}
    >
      {/* Image */}
      <div className="relative h-52 md:h-96 w-full lg:w-1/2 mb-6 lg:pb-0 pr-0 lg:mr-10 xl:mr-20 2xl:pr-0 mx-auto text-center">
        <Image
          src="/images/about-ux-1.png"
          alt="About UX Society DLSU"
          layout="fill"
          objectFit="contain"
          objectPosition="center"
        />
      </div>

      <div className="w-full lg:w-1/2 pb-3 lg:pb-0 mb-8">
        <h1 className=" text-3xl lg:text-4xl 2xl:text-5xl mb-6 lg:mb-12">
          About UX Society DLSU
        </h1>
        <p className="text-sm md:text-base lg:text-lg 2xl:text-xl mb-4">
          The UX Society - DLSU Chapter is one of the many recognized UX
          Societies in the same network. There's UX Society ADMU, Davao, Orange
          County and the latest, UX Society AIM-Chapter.
        </p>
        <p className="text-sm md:text-base lg:text-lg xl:text-xl mb-16">
          UX Society - DLSU aids various organizations by creating quality
          products and services by applying principles, concepts and
          methodologies in such strategies. We hold workshops, seminars and
          conferences to train members about the essentials skills of proper UX
          discipline and methodologies.
        </p>

        <div className="text-center md:text-left">
          <Button id="abouthome" to="/about">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
