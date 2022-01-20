import React from "react";
import styles from "./ArticleItem.module.scss";
import Image from "next/image";
import Link from "next/link";
import { DateTime } from "luxon";
import eventPicture from "../../public/images/temp-event.png";
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import faker from "faker";

const ArticleItem = ({ title, authors, date, content, slug }) => {

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className="text-sm lg:text-base mb-4 h-24 overflow-hidden whitespace-nowwrap overflow-ellipsis">
        {children}
      </p>
      ),
      [BLOCKS.HEADING_1]: (node, children) => (
        <p></p>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <p></p>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <p></p>
      ),
      [BLOCKS.HEADING_4]: (node, children) => (
        <p></p>
      ),
      [BLOCKS.HEADING_5]: (node, children) => (
        <p></p>
      ),
      [BLOCKS.HEADING_6]: (node, children) => (
        <p></p>
      )
    }
    
  };

  return (
    <section className="px-4 sm:px-32 mb-16 lg:mb-28 flex flex-col lg:flex-row justify-center lg:justify-between h-auto">
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
      <div className="w-full lg:w-96 lg:pb-0">
        {/* Header */}
        <div className="h-32 w-96 overflow-hidden overflow-ellipsis">
          <h1 className="text-black break-words text-3xl lg:text-4xl mb-6 lg:mb-12">
            <Link href={`/blog/${slug}`}>
              <a>
                {title}
              </a>
            </Link>
          </h1>
        </div>

        {/* Author and Date */}
        <div className="flex flex-row">
          <p className="text-sm lg:text-base pr-8">{authors}</p>
          <p className="text-sm lg:text-base">{DateTime.fromISO(date).toFormat("DDD")}</p>
        </div>

         {/* Content */}
        <p className="text-sm lg:text-base mb-4 h-24 overflow-hidden whitespace-nowwrap overflow-ellipsis">{documentToReactComponents(content.json, options)}</p>
      </div>
    </section>
  );
};

export default ArticleItem;
