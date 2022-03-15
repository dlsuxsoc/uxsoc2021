import React from "react";
import Button from "../../components/Button/Button";
import Image from "next/image";
import Link from "next/link";
import getRTFContent from "../../helpers/getRTFContent";
import styles from "../../styles/Home.module.css";
import { motion } from "framer-motion";
import { cardHover } from "../../helpers/motionHelpers";

const Articles = ({ articles }) => {
  return (
    <section
      className={`px-4 sm:px-8 lg:px-32 py-14 lg:py-20 flex flex-col justify-center lg:justify-between items-center lg:items-start h-auto ${styles.articleBg}`}
    >
      {/* Header */}
      <div className="container pb-3 lg:pb-0">
        <h1 className=" text-3xl lg:text-5xl mb-6 lg:mb-12">Articles</h1>
      </div>

      {/* Articles Container*/}
      <section className="container w-full flex flex-col lg:flex-row items-start">
        {/* Big Article */}
        <Link href={`/blog/${articles[0].slug}`}>
          <motion.div className="w-full lg:w-6/12 pr-0 lg:pr-10 xl:mr-0 text-center lg:text-left cursor-pointer" whileHover={cardHover}>
            <div className={"relative h-48 md:h-96 lg:h-44 md:mb-4 2xl:h-96 shadow-lg"}>
              <Image
                src={
                  articles[0].imagesCollection.items[0] === null
                    ? "/images/placeholder.png"
                    : articles[0].imagesCollection.items[0].url
                }
                key={0}
                alt={articles[0].title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <a className="line-clamp-2  font-bold text-base md:text-xl lg:text-2xl my-4 inline-block">
                {articles[0].title}
            </a>
            {/* Display preview text if exists, otherwise display first paragraph. */}
            <p className="break-words line-clamp-3 text-sm lg:text-base lg:mb-4">
              {articles[0].previewText ? articles[0].previewText : getRTFContent(articles[0])}
            </p>
          </motion.div>
        </Link>

        {/* Small Articles */}
        <div className="lg:w-6/12 lg:pl-10 lg:flex hidden flex-col items-start">
          {/* Article */}
          {articles.slice(1, 3).map((item, index) => {
            return (
              <Link href={`/blog/${item.slug}`}>
                <motion.div
                  className="w-full pb-8 flex flex-row items-start cursor-pointer"
                  key={index}
                  whileHover={cardHover}
                >
                  <div className={`w-1/3 relative lg:h-28 2xl:h-44 shadow-lg`}>
                    <Image
                      src={
                        item.imagesCollection.items[0] === null
                          ? "/images/placeholder.png"
                          : item.imagesCollection.items[0].url
                      }
                      alt={item.title}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>

                  <div className="w-2/3 flex flex-col pl-8">
                    <a className="line-clamp-2  text-base lg:text-xl mb-4 font-bold">
                      {item.title}
                    </a>
                    {/* Display preview text if exists, otherwise display first paragraph. */}
                    <p className="break-words line-clamp-4 text-xs lg:text-sm">
                      {item.previewText ? item.previewText : getRTFContent(item)}
                    </p>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </section>

      <Button id="articleshome" to="/blog" className="self-center lg:self-center mt-10">
        View More Articles
      </Button>
    </section>
  );
};

export default Articles;
