import HorizontalSlider from "../Sliders/HorizontalSlider";
import ProjectCard from "../Cards/ProjectCard";
import json from "../../jsons/projects.json";

const Projects = () => {
  return (
    <section className="flex justify-center px-8 py-7">
      <HorizontalSlider>
        {json.map((project) => (
          <ProjectCard
            key={project.id}
            name={project.name}
            description={project.description}
            image={project.image}
            github={project.github}
            deploy={project.deploy}
            tecnologies={project.tecnologies}
          />
        ))}
      </HorizontalSlider>
    </section>
  );
};

export default Projects;
