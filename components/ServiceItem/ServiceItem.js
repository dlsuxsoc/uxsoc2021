import React from "react";
import styles from "./ServiceItem.module.scss";
import Image from "next/image";
import Link from "next/link";
import eventPicture from "../../public/images/temp-event.png";
import faker from "faker";

const ServiceItem = ({ title, authors, slug }) => {
  return (
    <div className="items-center flex flex-col justify-center">

      <div className="w-2/3">
        <Image
          src={faker.image.nature()}
          alt="Placeholder"
          width={350}
          height={350}
        />
      </div>

      <div className="py-4 md:pt-8 w-full md:w-4/5">
        <p className="text-xl mb-4 text-center font-bold">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
        <p className="text-base mb-4 text-center">Lorem ipsum dolor sit amet, consectetuer adipiscing elit lorem ipsum dolor sit amet, consectetuer adipiscing elit lorem ipsum dolor sit amet, consectetuer adipiscing elit lorem ipsum dolor sit amet, consectetuer adipiscing elit lorem ipsum dolor sit amet, consectetuer adipiscing elit </p>
      </div>
    </div>
  );
};

export default ServiceItem;
