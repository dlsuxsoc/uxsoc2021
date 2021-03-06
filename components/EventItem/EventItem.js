import React from "react";
import styles from "./EventItem.module.scss";
import Image from "next/image";
import Link from "next/link";
import eventPicture from "../../public/images/temp-event.png";

const EventItem = ({ item }) => {
  return (
    <li className={`py-4 mr-0 md:mr-16 w-full md:w-72`}>
      <div className="relative w-full h-56">
        <Image
          src={item.image === null ? "/images/placeholder.png" : item.image.url}
          layout="fill"
          objectPosition="center"
          objectFit="contain"
        />
      </div>
      <p className="font-bold text-lg w-full text-justify pt-6 pb-2">
        {" "}
        {item.title}{" "}
      </p>
      {/* <p className="text-base w-full text-justify"> {description} </p> */}
    </li>
  );
};

export default EventItem;
