import React from "react";
import ProjectItem from "../../components/ProjectItem/ProjectItem";

const Projects = ({ contentfulProjects }) => {
  return (
    <section className="px-11 bg-offwhite">
      <div className="container py-14 lg:py-14">
        <div className="pb-3 lg:pb-0">
          <h1 className="text-black md:pt-8 pb-6 text-center lg:pl-24 lg:text-left">
            Projects
          </h1>
        </div>

        <div>
          {contentfulProjects.slice(0, 3).map((item, index) => {
            var classNames = index % 2 == 0? "lg:flex-row" : "lg:flex-row-reverse"
            return <ProjectItem item={item} key={index} classNames={classNames} id={index}/> 
        })}
        </div>
      </div>
      
    </section>
  );
};

export default Projects;
