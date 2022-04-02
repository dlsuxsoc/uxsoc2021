import React from "react";
import Image from "next/image";

const Team = ({ leads }) => {
  return (
    <section className="py-14 bg-offwhite" id="team">
      <div className="container md:px-4 lg:px-0 flex flex-col justify-center items-center place-items-center h-full lg:justify-between">
        {/* Header */}
        <h1 className="text-black pb-10 text-center text-4xl lg:text-6xl xl:text-5xl">
          Our team
        </h1>

        {/* Container for Members */}
        <div className="flex flex-row flex-wrap gap-y-10 gap-x-6 md:gap-x-2 text-center justify-center">
          {leads.map((lead, index) => {
            return (
              <div className="w-1/3 md:w-2/6 xl:w-2/12 gap-x-2" key={index}>
                {/* Lead Avatar */}
                <div className="mx-auto relative w-28 h-28 lg:w-40 lg:h-40">
                  <Image
                    className="rounded-full shadow-md"
                    src={lead.avatar.file.url}
                    alt={lead.avatar.name}
                    priority="true"
                    unoptimized={true}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>

                <div className="mt-2">
                  <h2 className="truncate text-sm md:text-base mb-2 ">
                    {lead.name}
                  </h2>
                  <p className="truncate text-xs md:text-sm mb-2">
                    {lead.position}
                  </p>
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
