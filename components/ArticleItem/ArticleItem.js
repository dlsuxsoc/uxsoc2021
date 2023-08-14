import React from "react";
import styles from "./ArticleItem.module.scss";
import Image from "next/image";
import Link from "next/link";
import { renderToString } from "react-dom/server";
import { DateTime } from "luxon";
import eventPicture from "../../public/images/temp-event.png";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import getRTFContent from "../../helpers/getRTFContent";
import { motion } from "framer-motion";
import { cardHover } from "../../helpers/motionHelpers";

const ArticleItem = ({ item }) => {
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="text-sm lg:text-base mb-4 h-24 overflow-hidden whitespace-nowwrap overflow-ellipsis">
          {children}
        </p>
      ),
      [BLOCKS.HEADING_1]: (node, children) => <p></p>,
      [BLOCKS.HEADING_2]: (node, children) => <p></p>,
      [BLOCKS.HEADING_3]: (node, children) => <p></p>,
      [BLOCKS.HEADING_4]: (node, children) => <p></p>,
      [BLOCKS.HEADING_5]: (node, children) => <p></p>,
      [BLOCKS.HEADING_6]: (node, children) => <p></p>,
    },
  };

  return (
    <Link href={`/articles/${item.slug}`}>
      <motion.section
        className="mb-8 lg:mb-28 flex flex-col lg:flex-row justify-center align-center items-center cursor-pointer"
        whileHover={cardHover}
      >
        {/* Image */}
        <div className="relative w-96">
          <div className={`${styles.articleImage} md:w-96 h-96`}>
            <Image
              src={
                item.imagesCollection.items[0] === null
                  ? "/images/placeholder.png"
                  : item.imagesCollection.items[0].url
              }
              alt="Placeholder"
              layout="fill"
              objectFit="contain"
              objectPosition="center"
            />
          </div>
        </div>

        {/* Header and Text */}
        <div className="w-96 lg:ml-16">
          {/* Header */}
          <div
            id={item.slug}
            className="h-auto min-w-full overflow-hidden overflow-ellipsis"
          >
            <h1 className="line-clamp-4 break-words text-3xl lg:text-4xl mb-6 lg:mb-12 pt-8 lg:pt-0">
              <a>{item.title}</a>
            </h1>
          </div>

          {/* Author and Date (done)*/}
          <div className="flex flex-row mb-6">
            <p className="text-sm lg:text-base pr-8">{item.authors[0]}</p>
            <p className="text-sm lg:text-base">
              {DateTime.fromISO(item.date).toFormat("DDD")}
            </p>
          </div>

          {/* Display preview text if exists, otherwise display first paragraph. */}
          <p className="line-clamp-4 text-sm lg:text-base mb-4 break-words">
            {item.previewText ? item.previewText : getRTFContent(item)}
          </p>
        </div>
      </motion.section>
    </Link>
  );
};

export default ArticleItem;
