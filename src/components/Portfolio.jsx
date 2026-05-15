import { useState } from "react";
import { PORTFOLIO_PROJECTS } from "../constants";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleTap = (id) => {
    setSelectedProject(selectedProject === id ? null : id);
  };

  return (
    <section className="max-w-7xl mx-auto" id="portfolio">
      <div className="mb-20">
        <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mt-20 mb-12">
          Portfolio
        </h2>
        <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO_PROJECTS.map((project) => (
            <div
              key={project.id}
              onClick={() => handleTap(project.id)}
              className="group relative overflow-hidden rounded-3xl mx-4 cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div
                className={`absolute inset-0 flex flex-col items-center justify-center backdrop-blur-lg transition-opacity duration-500 ${
                  selectedProject === project.id
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }`}
              >
                <h3 className="mb-2 text-xl font-medium text-white">
                  {project.name}
                </h3>
                <p className="mb-12 p-4 text-center text-white">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
