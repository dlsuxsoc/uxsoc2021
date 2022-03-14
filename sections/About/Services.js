import React from "react";
import Image from "next/image";

const Services = ({ servicesData }) => {
  return (
    <section className="px-4 sm:px-32 py-2 mb-16 md:mb-36 flex flex-col justify-center lg:justify-between items-center h-auto">
      {/* Header*/}
      <h1 className="text-black text-3xl lg:text-5xl mb-6 lg:mb-12">
        Our services
      </h1>

      {/* Service Container*/}
      <div className="flex flex-col lg:flex-row w-full justify-center space-y-6 lg:space-y-0 lg:space-x-8 xl:space-x-16">
        {/* Service */}
        {servicesData.slice(0, 3).map((item, index) => {
          return (
            <div
              className={`flex flex-col items-center w-full`}
              key={index}
            >
              <div className="p-24 relative h-24 md:h-60 md:w-60 2xl:h-72 2xl:w-72">
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
              <div className="w-full flex flex-col text-center items-center">
                <h2 className="text-black text-base lg:text-xl 2xl:text-2xl my-4">
                  {item.Title}
                </h2>
                <p className="break-words text-base xl:text-lg 2xl:text-xl md:w-80 lg:w-full">
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
