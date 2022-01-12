import React from "react";
import styles from "./ProjectItem.module.scss";
import Image from "next/image";
import Link from "next/link";
import eventPicture from "../../public/images/temp-event.png";
import faker from "faker";

const ProjectItem = ({ title, authors, slug }) => {
  return (
    <section className="flex flex-col-reverse md:flex-row justify-center py-12 items-center">

      <div className="pt-8 w-full px-8 md:w-3/5 md:px-24">
        <p className="text-xl mb-4 text-left font-bold">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
        <p className="text-base text-left">Lorem ipsum dolor sit amet, consectetuer adipiscing elit lorem ipsum dolor sit amet, consectetuer adipiscing elit lorem ipsum dolor sit amet, consectetuer adipiscing elit lorem ipsum dolor sit amet, consectetuer adipiscing elit lorem ipsum dolor sit amet, consectetuer adipiscing elit </p>
      </div>
      <div className="w-full md:w-2/5">
        <Image
          src={faker.image.nature()}
          alt="Placeholder"
          width={794}
          height={446}
        />
      </div>
    </section>
  );
};

export default ProjectItem;
