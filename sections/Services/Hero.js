import React from "react";
import ServiceItem from "../../components/ServiceItem/ServiceItem";
import servicesData from "../../data/services.json";

const Hero = () => {
  return (
    <section className="py-14 sm:px-8">
      <div className="container lg:px-32 flex flex-col justify-center items-center place-items-center h-auto min-h-screen">
        <h1 className="text-black pt-16 pb-8 text-center">Our services</h1>
        <section className="flex flex-col lg:flex-row h-full items-center">
          {servicesData.slice(0, 3).map((item, index) => {
            return <ServiceItem item={item} key={index} />;
          })}
        </section>

      </div>
    </section>
  );
};

export default Hero;
