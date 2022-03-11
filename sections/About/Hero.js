import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="px-4 sm:px-32 py-2 mt-28 md:mt-8 flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center h-screen">
      {/* Header and Text */}
      <div className="w-full lg:w-1/2 text-center lg:text-left pr-0 lg:pr-20 pb-3 lg:pb-0 mb-8">
        <h1 className="text-black text-3xl lg:text-5xl mb-6 lg:mb-12">
          UX Society
        </h1>
        <p className="text-base lg:text-lg 2xl:text-2xl mb-4">
          The UX Society - DLSU Chapter is one of the many recognized UX
          Societies in the same network. There's UX Society ADMU, Davao, Orange
          County and the latest, UX Society AIM-Chapter.
        </p>
        <p className="text-base lg:text-lg 2xl:text-2xl mb-4">
          UX Society - DLSU aids various organizations by creating quality
          products and services by applying principles, concepts and
          methodologies in such strategies. We hold workshops, seminars and
          conferences to train members about the essentials skills of proper UX
          discipline and methodologies.
        </p>
      </div>
      {/* IMAGE */}
      <div className="w-full lg:w-1/2 pb-2 lg:pb-0 text-center">
        <Image
          src="/images/home-1.png"
          alt="Sketch-About"
          width={489}
          height={311}
        />
      </div>
    </section>
  );
};

export default Hero;
