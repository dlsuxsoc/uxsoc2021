import React from "react";
import Button from "../../components/Button/Button";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import { motion } from "framer-motion";
import { homeProjectHover } from "../../helpers/motionHelpers";

const Projects = ({ projects }) => {
  return (
    <section className={`px-4 sm:px-8 lg:px-32 py-14 lg:py-20 flex flex-col justify-center lg:justify-between items-center h-auto ${styles.projectsBg}`}>
      {/* Header */}
      <div className="pb-3 lg:pb-0">
        <h1 className=" text-3xl lg:text-5xl mb-6 lg:mb-12">Projects</h1>
      </div>

      {/* Projects Container*/}
      <section className="container flex flex-col md:flex-row w-full md:justify-between lg:mb-5">
        {/* Project */}

        {projects ? (
          projects.slice(0, 3).map((item, index) => {
            return (
              <Link href={`/services/#${index}`} key={index} passHref>
                <motion.div
                  className={`text-center cursor-pointer ${index > 0 ? "hidden lg:block" : "block"
                    } w-full lg:w-1/3 ${index === 1 ? "mx-16" : ""}`}
                  whileHover={homeProjectHover}
                >
                  <div className="relative h-48 md:h-96 lg:h-44 2xl:h-72 shadow-lg">
                    <Image
                      src={ item.image.url }
                      alt={ item.title }
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>

                  {/* Project Text */}
                  <h2 className=" text-base md:text-xl mb-4 mt-8 line-clamp-2">
                    <a>{item.title}</a>
                  </h2>
                  <p className="break-words text-sm lg:text-base line-clamp-4">
                    {item.previewText ? item.previewText : item.description}
                  </p>
                </motion.div>
              </Link>
            );
          })
        ): (
          <p className="text-center">An error occurred while fetching projects.</p>
        )}
      </section>

      <Button className="mt-10" id="serviceshome" to="/services">
        Learn More
      </Button>
    </section>
  );
};

export default Projects;
