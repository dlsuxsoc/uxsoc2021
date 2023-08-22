import React from "react";
import styles from "./ServiceItem.module.scss";
import Image from "next/image";
import Link from "next/link";

const ServiceItem = ({ item }) => {
  return (
    <div
      className={`flex flex-col items-center w-full`}
    >
      <div className="p-20 relative h-24 md:h-50 md:w-50">
        <Image
          src={ item.image.url }
          alt={ item.title }
          layout="fill"
          objectFit="contain"
          objectPosition="center"
        />
      </div>

      {/* Services Text */}
      <div className="w-full flex flex-col text-center items-center">
        <h2 className="text-base lg:text-xl 2xl:text-2xl my-4">
          {item.title}
        </h2>
        <p className="break-words text-base xl:text-md 2xl:text-xl md:w-60 lg:w-full">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default ServiceItem;
