import React from "react";
import styles from "./ProjectItem.module.scss";
import Image from "next/image";
import Link from "next/link";
import eventPicture from "../../public/images/temp-event.png";

const ProjectItem = ({ item, classNames, id }) => {
  return (
    <section>
      <span className={`${styles.anchor}`} id={`project${id}`}> </span>
      <div id={`${id}`} className={`flex flex-col-reverse ${classNames} justify-center py-12 items-center`}>
        <div className="pt-8 md:pt-0 w-full px-5 lg:w-6/12 md:px-24">
          <h2 className=" mb-4 text-center md:text-left font-bold text-base lg:text-xl">{item.title}</h2>
          <p className="line-clamp-5 text-base text-center md:text-left"> {item.previewText ? item.previewText : item.description}</p>
        </div>
        <div className="w-full lg:w-6/12 px-5 md:px-20 mb:20">
          <Image
            src={
              item.image.url === null ? "/images/placeholder.png" : item.image.url
            }
            alt="Placeholder"
            width={794}
            height={446}
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectItem;
