import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="px-4 sm:px-8 lg:px-32 pt-20 pb-14 lg:pt-28 lg:pb-20">
      <div className="container flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center h-full">
        {/* Header and Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left pr-0 lg:pr-20">
          <h1 className="text-4xl lg:text-6xl xl:text-5xl mb-6 lg:mb-12">
            Our Organization
          </h1>
          <p className="text-base lg:text-lg 2xl:text-2xl">
            We aid various organizations in developing high-quality products and services by implementing
            principles, concepts, and methodologies in such strategies. We also hold workshops, seminars,
            and conferences to train members the fundamentals of UX discipline and methodologies.
          </p>

        </div>
        {/* IMAGE */}
        {/* <div className="w-full lg:w-1/2 pb-2 lg:pb-0 text-center">
          <Image
            src="/images/home-1.png"
            alt="Sketch-About"
            width={489}
            height={311}
          />
        </div> */}
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
