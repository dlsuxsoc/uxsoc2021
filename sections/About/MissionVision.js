import React from "react";
import Image from "next/image";

const MissionVision = () => {
  return (
    <section className="px-4 sm:px-32 py-2 mb-16 lg:mb-36 flex flex-col justify-center lg:justify-between items-center h-auto">
      <div className="flex flex-col text-center">
        {/* Image */}
        <div className="relative h-48 md:h-64 lg:h-52 2xl:h-72 mb-6 lg:mb-12">
          <Image
            src="/images/mission-vision-1.png"
            alt="Placeholder-About"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
          />
        </div>

        {/* Header and Text */}
        <div className="pb-3 lg:pb-0 mb-8">
          <h1 className="text-black text-3xl lg:text-5xl mb-6 lg:mb-12">
            The Mission-Vision
          </h1>

          <div className="md:w-96 mx-auto">
            <p className="text-base lg:text-xl mb-4">
              To create a community of Lasallian User Experience Designers and
              enthusiasts through User Experience Education and the creation of
              a distinct User Experience Culture within the university.
            </p>
            <p className="text-base lg:text-xl mb-4">
              UX Society envisions to be DLSU's premier consulting and
              educational body for User Experience Strategy, particularly in
              technologies that enhance usability, guide human-computer
              interaction, and showcase effective visual design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
