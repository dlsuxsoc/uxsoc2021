import React from "react";
import Button from "../../components/Button/Button";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

const AboutUs = ({ refProp }) => {
  return (
    <section
      ref={refProp}
      className={`px-4 sm:px-8 lg:px-32 py-14 lg:py-20 h-auto ${styles.aboutBg}`}
    >
      {/* Wrapper for Container */}
      <div className="container flex flex-col lg:flex-row justify-center lg:justify-between items-center">
        {/* Image */}
        <div className="relative h-48 md:h-96 lg:h-60 xl:h-72 2xl:h-96 w-full lg:w-1/2 lg:mr-10 xl:mr-20 2xl:pr-2 mx-auto text-center">
          <Image
            src="/images/about-ux-1.png"
            alt="About UX Society DLSU"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>

        <div className="w-full lg:w-1/2 mt-10 lg:my-0">
          <h1 className=" text-3xl lg:text-4xl 2xl:text-5xl mb-6 lg:mb-10">
            Our Organization
          </h1>
          <p className="text-sm md:text-base lg:text-xl 2xl:text-2xl mb-8">
            Together with the other UX Society chapters, we are one of the recognized UX Societies for students. 
            We aid various organizations by creating quality products and services by applying principles, 
            concepts, and methodologies in such strategies. We also hold workshops, seminars, and conferences 
            to train members about the essentials skills of proper UX discipline and methodologies.
          </p>

          <div className="container text-center lg:text-left mt-10">
            <Button id="abouthome" to="/about">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default AboutUs;
