import React from "react";
import Button from "../components/Button/Button";
import Image from "next/image";
const Events = ({ events }) => {
  return (
    <section
      className={`px-4 sm:px-8 lg:px-32 py-2 pb-16 lg:pb-36 flex flex-col justify-center lg:justify-between items-center lg:items-start h-auto ${styles.eventBg}`}
    >
      {/* Header */}
      <div className="pb-3 lg:pb-0">
        <h1 className=" text-3xl lg:text-5xl mb-6 lg:mb-12 line-clamp-2">
          Events
        </h1>
      </div>

      {/* Event Posts Container*/}
      <section className="flex flex-col md:flex-row w-full md:justify-between">
        {/* Post */}
        {events.slice(0, 3).map((item, index) => {
          return (
            <div
              className={`text ${
                index > 0 ? "hidden lg:block" : "block"
              } w-full lg:w-1/3 ${index === 1 ? "mx-8" : ""}`}
              key={index}
            >
              <div className="relative h-48 md:h-96 lg:h-44 2xl:h-72 shadow-lg">
                <Image
                  src={
                    item.image === null
                      ? "/images/placeholder.png"
                      : item.image.url
                  }
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <h2 className="text-center  lg:text-left text-base md:text-xl my-4">
                {item.title}
              </h2>
              {/* <p className="break-words text-center lg:text-left text-sm lg:text-base mb-4">
                  {item.description}
                </p> */}
            </div>
          );
        })}
      </section>

      <Button id="eventshome" to="/event" className="self-center lg:self-start">
        Learn More
      </Button>
    </section>
  );
};

export default Events;
