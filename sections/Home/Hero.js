import React from "react";
import Button from "../../components/Button/Button";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

const Hero = ({ refProp }) => {
  return (
    <section className="px-4 sm:px-8 lg:px-32 py-20 lg:py-32">
      <div className="container flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center h-full">
        <div className="text-center lg:text-left w-full lg:w-1/2 pr-0 lg:pr-28 pb-2">
          <h1 className="text-4xl lg:text-6xl xl:text-5xl 2xl:text-7xl mb-6 lg:mb-12">
            User Experience Society - DLSU
          </h1>
          <p className="text-base lg:text-2xl 2xl:text-3xl">
            A student organization that advocates User Experience, Experience
            Design, and Human-Computer Interaction 
          </p>
          <Button
            className="mt-5"
            eventHandler={(event) => {
              refProp.current.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Explore More
          </Button>
        </div>
        <div className="w-full lg:w-1/2 relative mb-8 pb-3 lg:pb-0 h-48 md:h-80">
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
