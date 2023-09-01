import React, { useState } from "react";
import Image from "next/image";
import Button from "../../components/Button/Button";

const UpcomingEvents = ({ events }) => {
  const upcomingEvents = events.filter((event) => !event.concluded);

  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentEventIndex(index);
  };

  // If there are no upcoming events, don't render any event cards
  if (upcomingEvents.length === 0) {
    return (
      <section className="py-14 bg-offwhite" id="noUpcomingEvents">
        <div className="container md:px-4 lg:px-0 flex flex-col justify-center items-center place-items-center h-full lg:justify-between">
          {/* Header */}
          <h1 className="text-black pb-10 text-center text-4xl lg:text-6xl xl:text-5xl">
            Stay tuned for our upcoming events!
          </h1>
        </div>
      </section>
    );
  }

  const currentEvent = upcomingEvents[currentEventIndex];

  return (
    <section className="py-14 bg-offwhite" id="upcomingEvents">
      <div className="container md:px-4 lg:px-0 flex flex-col justify-center items-center place-items-center h-full lg:justify-between">
        {/* Header */}
        <h1 className="text-black pb-10 text-center text-4xl lg:text-6xl xl:text-5xl">
          Upcoming events
        </h1>

        {/* Container for Events */}
        <div className="relative w-full">
          <div className="text-center justify-center overflow-hidden">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className={`w-full transition ease-in-out duration-700 opacity-0 ${
                  index === currentEventIndex ? "opacity-100" : ""
                }`}
              >
                {index === currentEventIndex && (
                  <div className="flex md:flex-row flex-col items-center">
                    <div className="relative xl:w-10/12 md:w-2/5 w-64 h-64 rounded-md shadow-md overflow-hidden">
                      {/* Event Image */}
                      <Image
                        src={event.image.file.url}
                        alt={event.image.name}
                        priority={true}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className="flex flex-col md:w-4/5 w-full h-auto mx-5 mt-5 md:text-left text-center">
                      {/* Event Details */}
                      <h2 className="text-2xl mb-2 ">{event.title}</h2>
                      <h3 className="text-lg mb-2">
                        {new Date(event.dateStart).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                        ,{" "}
                        {new Date(event.dateStart).toLocaleTimeString("en-US", {
                          hour: "numeric",
                          minute: "numeric",
                          hour12: true,
                        })}{" "}
                        -{" "}
                        {new Date(event.dateEnd).toLocaleTimeString("en-US", {
                          hour: "numeric",
                          minute: "numeric",
                          hour12: true,
                        })}{"  ||  via "}{
                          event.location
                        }
                      </h3>
                      <p className="text-lg mb-2 overflow-ellipsis overflow-hidden">
                        {event.description}
                      </p>
                      <a
                        href={event.lumaLink}
                        className="mx-2 mt-4 bg-green text-white text-bold text-center transform transition-transform hover:-translate-y-1 hover:shadow-md py-2 px-4 rounded-md"
                        data-luma-action="checkout"
                        data-luma-event-id={event.lumaEventID}
                      >
                        Open in Lu.ma
                      </a>
                      <script
                        id="luma-checkout"
                        src="https://embed.lu.ma/checkout-button.js"
                      ></script>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-5">
          {upcomingEvents.map((_, index) => (
            <button
              key={index}
              aria-label='Dot'
              onClick={() => handleDotClick(index)}
              className={`h-3 w-3 mx-1 rounded-full ${
                index === currentEventIndex ? "bg-green" : "bg-gray"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
