import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="px-4 sm:px-32 py-2 mt-20 lg:mt-28 flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center h-full">
      {/* Header and Text */}
      <div className="w-full lg:w-1/2 text-center lg:text-left pr-0 lg:pr-20">
        <h1 className="text-black text-3xl lg:text-5xl mb-6 lg:mb-12">
          UX Society DLSU
        </h1>
        <p className="text-base lg:text-lg 2xl:text-2xl mb-4">
          The UX Society - DLSU Chapter is one of the many recognized UX
           Societies in the same network. {/* There's UX Society ADMU, Davao, Orange
          County and the latest, UX Society AIM-Chapter. */}
        </p>
        {/* <p className="text-base lg:text-lg 2xl:text-2xl">
          UX Society - DLSU aids various organizations by creating quality
          products and services by applying principles, concepts and
          methodologies in such strategies. We hold workshops, seminars and
          conferences to train members about the essentials skills of proper UX
          discipline and methodologies.
        </p> */}
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
      <div className="w-full lg:w-1/2 relative pb-2 lg:pb-0 h-48 md:h-96">
        <Image
          src="/images/home-1.png"
          alt="Hero Image"
          layout="fill"
          objectFit="contain"
          objectPosition="center"
        />
      </div>
    </section>
  );
};

export default Hero;
