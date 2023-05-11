import ProjectCard from "./Cards/ProjectCard";
import ImgJyD from "../assets/images/j&d-app.png";
import ImgWeather from "../assets/images/wheater-app.png";
import ImgPorfolio from "../assets/images/porfolio-app.png";

const Projects = () => {
  return (
    <section id="projects" className="px-10 pt-52 pb-44 img-bg-projects bg-[#eaedf2]">
      <div className="text-center">
        <p className="text-base font-bold font-neo text-[#fa7f98]">PROJECTS</p>
        <p className="text-4xl font-bold font-neo text-os">PORTFOLIO</p>
      </div>
      <div className="container mx-auto mt-16">
        <div className="flex flex-wrap justify-center gap-5">
          <ProjectCard
            name={"SunCloud"}
            description={
              "Proyecto de app para visualización del pronóstico del tiempo en tiempo real hasta de 5 días posteriores, consumiendo datos del API de Open Weather."
            }
            tecnologies={["React", "Redux Toolkit", "Tailwind CSS", "Axios"]}
            deploy={"https://weather-app-react-redux-tailwind.vercel.app/"}
            github={"https://github.com/nickyamc/SunCloud"}
            img={ImgWeather}
          />
          <ProjectCard
            name={"J&D Distribuidores"}
            description={
              "Projecto de ecommerce para realizar pedidos de manera local(ciudad), consumiendo recursos API de la empresa contratada"
            }
            tecnologies={[
              "React",
              "React Router",
              "Redux Toolkit",
              "Tailwind CSS",
              "Axios",
            ]}
            deploy={"https://www.jddistribuidores.com/"}
            img={ImgJyD}
          />
          <ProjectCard
            name={"Porfolio"}
            description={"Projecto de porfolio para mostrar mis proyectos y conocimientos."}
            tecnologies={["React", "Redux"]}
            deploy={"https://portfolio-e4ge.vercel.app/"}
            github={"https://github.com/nickyamc/Portfolio"}
            img={ImgPorfolio}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
