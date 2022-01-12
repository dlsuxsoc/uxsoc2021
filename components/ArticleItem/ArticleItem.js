import React from "react";
import styles from "./ArticleItem.module.scss";
import Image from "next/image";
import Link from "next/link";
import eventPicture from "../../public/images/temp-event.png";
import faker from "faker";

const ArticleItem = ({ title, authors, slug }) => {
  return (
    <section className="px-4 sm:px-32 py-2 mb-16 lg:mb-28 flex flex-col lg:flex-row justify-center lg:justify-between h-auto">
      {/* Image */}
      <div className=" mr-0 md:mr-16 w-96">
        <Image
          src={faker.image.nature()}
          alt="Placeholder"
          width={489}
          height={311}
        />
      </div>

      {/* Header and Text */}
      <div className="w-full lg:w-1/2  lg:pb-0">
        <h1 className="text-black text-3xl lg:text-4xl mb-6 lg:mb-12">
          <Link href={`/blog/${slug}`}>
            <a>
              {title}
            </a>
          </Link>
        </h1>
        <p className="text-sm lg:text-base mb-4">{authors}</p>
        <p className="text-sm lg:text-base mb-4">{slug}</p>
      </div>
    </section>
  );
};

export default ArticleItem;
