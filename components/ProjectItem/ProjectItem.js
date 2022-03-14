import React from "react";
import styles from "./ProjectItem.module.scss";
import Image from "next/image";
import Link from "next/link";
import eventPicture from "../../public/images/temp-event.png";

const ProjectItem = ({ item, classNames, id }) => {
  return (
    <section id={`${id}`} className={`flex flex-col-reverse ${classNames} justify-center py-12 items-center`}>
      <div className="pt-8 md:pt-0 w-full px-8 lg:w-6/12 md:px-24">
        <h2 className=" mb-4 text-left font-bold">{item.title}</h2>
        <p className="line-clamp-5 text-base text-left">{item.description} </p>
      </div>
      <div className="w-full lg:w-6/12 px-20">
        <Image
          src={
            item.image.url === null ? "/images/placeholder.png" : item.image.url
          }
          alt="Placeholder"
          width={794}
          height={446}
        />
      </div>
    </section>
  );
};

export default ProjectItem;
