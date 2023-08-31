import React, { useState } from "react";
import Button from "../../components/Button/Button";
import ProjectItem from "../../components/ProjectItem/ProjectItem";
import { useRouter } from "next/router";

const Pagination = ({ projects, sectionId }) => {
  const router = useRouter();
  const projectsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const handlePageChange = (page) => {
    setCurrentPage(page);
    router.push(`${router.pathname}#${sectionId}`);
  };

  return (
    <div>
      <div>
        {currentProjects.map((item, index) => {
          const classNames =
            index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse";
          return (
            <ProjectItem
              item={item}
              key={index}
              classNames={classNames}
              id={index}
            />
          );
        })}
      </div>
      <div className="flex justify-center mt-4 space-x-1">
        <Button
          variant="text"
          size="sm"
          eventHandler={(e) => {
            e.preventDefault();
            handlePageChange(currentPage - 1);
          }}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        {Array.from({ length: totalPages }, (_, index) => (
          <Button
            variant={currentPage === index + 1 ? "green" : "white"}
            size="sm"
            eventHandler={(e) => {
              e.preventDefault();
              handlePageChange(index + 1);
            }}
          >
            {index + 1}
          </Button>
        ))}
        <Button
          variant="text"
          size="sm"
          eventHandler={(e) => {
            e.preventDefault();
            handlePageChange(currentPage + 1);
          }}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
