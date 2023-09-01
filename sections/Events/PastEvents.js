import React, { useState } from "react";
import Image from "next/image";
import Button from "../../components/Button/Button";

const PastEvents = ({ events }) => {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const concludedEvents = events.filter((event) => event.concluded);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const eventsToShow = concludedEvents.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <section className="py-14" id="events">
      <div className="container md:px-4 lg:px-0 flex flex-col justify-center items-center place-items-center h-full lg:justify-between">
        {/* Header */}
        <h1 className="text-black pb-10 text-center text-4xl lg:text-6xl xl:text-5xl">
          Past events
        </h1>

        {/* Container for Events */}
        <div className="flex flex-row flex-wrap gap-y-10 gap-x-10 text-center justify-center w-full">
          {eventsToShow.map((event, index) => {
            return (
              <div
                className="xl:w-5/12 w-full rounded-xl bg-white shadow-md"
                key={index}
              >
                <div className="flex md:flex-row flex-col items-center">
                  <div className="relative md:w-2/5 md:h-full w-48 h-48 rounded-md shadow-md overflow-hidden">
                    {/* Event Image */}
                    <Image
                      src={event.image.file.url}
                      alt={event.image.name}
                      priority="true"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="flex flex-col md:w-4/5 w-full h-64 mx-5 mt-5 md:text-left text-center">
                    <h2 className="text-2xl px-3 mb-2">{event.title}</h2>
                    <h3 className="text-lg px-3 mb-2">
                      {new Date(event.dateStart).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })},{" "}
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
                      })}
                    </h3>
                    <p className="text-lg mb-2 px-3 overflow-ellipsis overflow-hidden line-clamp-3">
                      {event.description}
                    </p>
                    <a
                      href={event.lumaLink}
                      className="mx-2 my-4 bg-green text-white text-center transform transition-transform hover:-translate-y-1 hover:shadow-md py-2 px-4 rounded-md"
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
              </div>
            );
          })}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-5">
          {Array.from({ length: Math.ceil(concludedEvents.length / itemsPerPage) }).map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`mx-2 py-2 px-4 rounded-md ${
                index + 1 === currentPage ? "bg-green text-white" : "bg-gray text-black"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastEvents;
