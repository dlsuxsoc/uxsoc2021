import React from "react";
import Button from "../../components/Button/Button";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

const Hero = ({ refProp }) => {
  return (
    <section className="px-4 sm:px-8 lg:px-32 pt-20 pb-14 lg:pt-28 lg:pb-20">
      <div className="container flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center h-full">
        <div className="text-center lg:text-left w-full lg:w-1/2 pr-0 lg:pr-28">
          <h1 className="text-4xl lg:text-6xl xl:text-5xl mb-6 lg:mb-12">
            User Experience Society - DLSU
          </h1>
          <p className="text-base lg:text-xl 2xl:text-2xl">
            We are a student organization that advocates  User Experience, Experience Design, and 
            Human-Computer Interaction practices.
          </p>
          <Button
            className="mt-10"
            eventHandler={(event) => {
              refProp.current.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Explore More
          </Button>
        </div>
        <div className="w-full lg:w-1/2 relative mb-10 lg:mb-0 h-48 md:h-96">
          <Image
            src="/images/home-1.png"
            alt="Hero Image"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
