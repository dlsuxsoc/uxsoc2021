import React from "react";
import Image from "next/image";

const MissionVision = () => {
  return (
    <section className="px-4 sm:px-32 py-14 lg:py-20 flex flex-col justify-center lg:justify-between items-center h-auto bg-offwhite">
      <div className="container flex flex-col lg:flex-row text-center lg:text-left items-center space-x-0 lg:space-x-8 xl:space-x-14 2xl:space-x-0">
        {/* Image */}
        <div className="w-full lg:w-1/2 relative h-52 md:h-72 lg:h-96 mb-6 lg:mb-0">
          <Image
            src="/images/mission-vision-1.png"
            alt="Placeholder-About"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
          />
        </div>

        <div className="w-full lg:w-1/2">
          {/* Header and Text */}
          <h1 className="text-3xl lg:text-5xl mb-6 lg:mb-10">
            The Mission-Vision
          </h1>

          <div className="md:w-96 lg:w-full mx-auto space-y-4">
            <p className="text-base lg:text-lg 2xl:text-xl">
              Our goal is to create a community of User Experience Designers and Enthusiasts 
              through User Experience Education and the creation of a distinct User Experience 
              Culture within the student community.
            </p>
            <p className="text-base lg:text-lg 2xl:text-xl">
              To be a premier consulting and educational body for User Experience Strategy, 
              particularly in technologies that enhance usability, guide human-computer 
              interaction, and showcase effective visual design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
