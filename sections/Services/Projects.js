import React from "react";
import ProjectItem from "../../components/ProjectItem/ProjectItem";

const Projects = ({ contentfulProjects }) => {
  return (
    <section>
      <div className="pb-3 lg:pb-0">
        <h1 className="text-black md:pt-8 pb-6 text-center lg:pl-24 lg:text-left">
          Projects
        </h1>
      </div>

      <div>
        {contentfulProjects.slice(0, 3).map((item, index) => {
          return <ProjectItem item={item} key={index} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
