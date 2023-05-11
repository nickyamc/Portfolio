import React from "react";
import WorkCard from "./Cards/WorkCard";
import SliderButtons from "./Sliders/SliderButtons";

const Experience = () => {
  return (
    <section id="experience" className="bg-[#f7f8fa] pt-12 sm:pt-32 pb-16 sm:pb-44 px-3 lg:px-10 xl:px-40 2xl:px-64 img-bg-experience overflow-hidden">
      <div className="flex flex-col gap-7 justify-center items-center">
        <div className="flex flex-col self-stretch ml-20">
          <p className="text-base font-bold font-neo text-[#fa7f98]">
            EXPERIENCE
          </p>
          <p className="text-4xl font-bold font-neo text-os">Profesional</p>
        </div>
        <SliderButtons>
          <div className="snap-center">
            <WorkCard
              side={true}
              job={"Analista de Datos"}
              company={"JS Consultores & Contratistas"}
              time={"Sept. 2022 - Dic. 2022"}
              description={
                "Análisis y recopilación de datos para el desarrollo de plataforma de gestión de pagos de la Dirección Regional de Transportes y asesoría para uso correcto de los activos TI"
              }
              image={
                "/images/js-consultores.png"
              }
            />
          </div>
          <div className="snap-center">
            <WorkCard
              side={true}
              job={"Pasante como Desarrollador"}
              company={"Gobierno Regional de Madre de Dios"}
              time={"Ago. 2021 - Dic. 2021"}
              description={
                "Desarrollo de app web para gestión información documentaría y estadística de metadatos, mantenimiento de servicios alojados en servidores."
              }
              url={"https://www.gob.pe/regionmadrededios"}
              image={
                "/images/goremad.jpg"
              }
            />
          </div>
          <div className="snap-center">
            <WorkCard
              side={true}
              job={"Desarrollador Java"}
              company={"Babas.devel"}
              time={"Ene. 2020 - Dic. 2020"}
              description={
                "Desarrolló sistemas comerciales distribuidos en red con énfasis en el rendimiento y escalabilidad, aplicando patrones de diseño en procesos consultas en red y métodos almacenados."
              }
              url={"https://www.facebook.com/Babas.devel"}
              image={
                "/images/babasdevel.png"
              }
            />
          </div>
        </SliderButtons>
      </div>
    </section>
  );
};

export default Experience;
