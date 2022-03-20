import React from "react";
import ServiceItem from "../../components/ServiceItem/ServiceItem";
import servicesData from "../../data/services.json";

const Hero = () => {
  return (
    <section className="py-16">
      <div className="container lg:px-32 flex flex-col justify-center items-center place-items-center h-full lg:justify-between">
        {/* Header */}
        <h1 className="text-black py-10 text-center text-4xl lg:text-6xl xl:text-5xl">Our services</h1>

        {/* Service Component */}
        <section className="mx-10 flex flex-col lg:flex-row justify-center space-y-20 lg:space-y-0 lg:space-x-8 xl:space-x-16">
          {servicesData.slice(0, 3).map((item, index) => {
            return <ServiceItem item={item} key={index} />;
          })}
        </section>

      </div>
    </section>
  );
};

export default Hero;
