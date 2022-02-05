import React from "react";
import styles from "./ProjectItem.module.scss";
import Image from "next/image";
import Link from "next/link";
import eventPicture from "../../public/images/temp-event.png";
import faker, { image } from "faker";

const ProjectItem = ({ item }) => {
  return (
    <section className="flex flex-col-reverse md:flex-row justify-center py-12 items-center">

      <div className="pt-8 md:pt-0 w-full px-8 md:w-3/5 md:px-24">
        <h2 className="text-black mb-4 text-left font-bold">{item.title}</h2>
        <p className="line-clamp-5 text-base text-left">{item.description} </p>
      </div>
      <div className="w-full md:w-2/5">
        <Image
          src={item.image.url === null ? "/images/placeholder.png" : item.image.url}
          alt="Placeholder"
          width={794}
          height={446}
        />
      </div>
    </section>
  );
};

export default ProjectItem;
