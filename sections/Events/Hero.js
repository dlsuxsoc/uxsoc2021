import React from "react";
import Button from "../../components/Button/Button";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

const Hero = ({ refProp }) => {
  const openLuMaUrl = () => {
    window.open('https://lu.ma/u/usr-fijP38TSVC7Nv2W', '_blank');
  };

  return (
    <section className="px-4 sm:px-8 lg:px-32 pt-20 pb-14 lg:pt-28 lg:pb-20">
      <div className="container flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center h-full">
        <div className="text-center lg:text-left w-full lg:w-1/2 pr-0 lg:pr-28">
          <h1 className="text-4xl lg:text-6xl xl:text-5xl mb-6 lg:mb-12">
            UX Society Taft Events
          </h1>
          <p className="text-base lg:text-xl 2xl:text-2xl">
              UX Society Taft conducts various events centered around 
              making quality UX education and training accessible to 
              students in the greater Taft community.
          </p>
          <Button
            className="mt-10"
            eventHandler={openLuMaUrl}
          >
            See us on Lu.ma
          </Button>
        </div>
        <div className="w-full lg:w-1/2 relative mb-10 lg:mb-0 h-48 md:h-96">
          <Image
            src="/images/services-community-engagement.png"
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
