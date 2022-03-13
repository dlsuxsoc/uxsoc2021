import React from "react";
import Image from "next/image";

const Services = ({ servicesData }) => {
  return (
    <section className="px-4 sm:px-32 py-2 mb-16 lg:mb-36 flex flex-col justify-center lg:justify-between items-center h-auto">
      {/* Header*/}
      <div className="pb-3 lg:pb-0">
        <h1 className="text-black text-3xl lg:text-5xl mb-6 lg:mb-12">
          Our services
        </h1>
      </div>
      {/* Service Container*/}
      <div className="flex flex-col items-center w-full md:justify-center">
        {/* Service */}
        {servicesData.slice(0, 3).map((item, index) => {
          return (
            <div
              className={`2xl:px-72 pb-2 flex flex-col md:flex-row items-center justify-center w-full`}
              key={index}
            >
              <div className="p-24 mr-0 md:mr-28 relative h-24 md:h-36 lg:h-44 2xl:h-72">
                <Image
                  src={
                    item.Image === null ? "/images/placeholder.png" : item.Image
                  }
                  alt="Service Image"
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center"
                />
              </div>

              {/* Services Text */}
              <div className="w-full lg:w-1/2 flex flex-col text-center md:text-left">
                <h2 className="text-black text-base lg:text-xl 2xl:text-2xl my-4">
                  {item.Title}
                </h2>
                <p className="break-words text-base xl:text-lg 2xl:text-xl mb-4">
                  {item.Content}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
