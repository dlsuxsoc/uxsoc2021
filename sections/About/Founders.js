import React from "react";
import Image from "next/image";

const Team = ({ founders }) => {
  return (
    <section className="py-14 bg-white" id="team">
      <div className="container md:px-4 lg:px-0 flex flex-col justify-center items-center place-items-center h-full lg:justify-between">
        {/* Header */}
        <h1 className="text-black pb-10 text-center text-4xl lg:text-6xl xl:text-5xl">
          Founders
        </h1>

        {/* Container for Members */}
        <div className="flex flex-row flex-wrap gap-y-10 gap-x-2 md:gap-x-6 lg:gap-x-12 xl:gap-x-6 2xl:gap-x-14 md:px-32 lg:px-60 xl:px-32 2xl:px-40 text-center justify-center w-full">
          {founders.map((founder, index) => {
            return (
              <div className="w-40 md:w-44" key={index}>
                {/* founder Avatar */}
                <div className="mx-auto relative w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 xl:w-32 xl:h-32 2xl:w-40 2xl:h-40 rounded-full shadow-md overflow-hidden">
                  <Image
                    src={founder.avatar.file.url}
                    alt={founder.avatar.name}
                    priority="true"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>

                <div className="mt-2">
                  <h2 className="truncate text-sm md:text-base mb-2 ">
                    {founder.name}
                  </h2>
                  
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
