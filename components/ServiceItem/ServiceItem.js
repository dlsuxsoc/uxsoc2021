import React from "react";
import styles from "./ServiceItem.module.scss";
import Image from "next/image";
import Link from "next/link";
import eventPicture from "../../public/images/temp-event.png";

const ServiceItem = ({ item }) => {
  return (
    <div className="items-center flex flex-col justify-center">
      <div className="relative w-full ">
        <div className={`${styles.articleImage} w-full  md:w-72 h-72`}>
          <Image
            src={item.Image === null ? "/images/placeholder.png" : item.Image}
            alt="Placeholder"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
          />
        </div>
      </div>
      <div className="py-4 md:pt-8 w-full md:w-4/5 px-8 md:px-0">
        <p className="text-xl mb-4 text-center font-bold">{item.Title} </p>
        <p className="text-base mb-4 text-center">{item.Content}</p>
      </div>
    </div>
  );
};

export default ServiceItem;
