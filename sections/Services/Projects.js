import React from "react";
import Pagination from "../../components/Pagination/Pagination";

const Projects = ({ projects }) => {
  return (
    <section className="px-11 bg-offwhite">
      <div className="container py-14 lg:py-14" id="projects">
        <div className="pb-3 lg:pb-0">
          <h1 className="text-black md:pt-8 pb-6 text-center lg:pl-24 lg:text-left text-3xl lg:text-5xl ">
            Projects
          </h1>
        </div>
        <div className="flex justify-center space-x-2">
          {projects ? (
            <Pagination projects={projects} sectionId={"projects"} />
          ) : (
            <p>An error occurred while fetching projects.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
