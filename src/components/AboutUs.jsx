
const AboutUs = () => {
  return (
    <section id="aboutus" className="bg-[#f7f8fa] pb-20 sm:pb-36 px-4 img-bg-about">
      <div className="container mx-auto">
        <div className="flex flex-col gap-16 justify-center items-center">
          <div className="text-center">
            <p className="text-base font-bold font-neo text-[#fa7f98]">
              SOBRE MI
            </p>
            <p className="text-4xl font-bold font-neo text-os">
              Nick Macedo Córdova
            </p>
          </div>
          <p className="flex flex-col gap-4 max-w-[900px] text-justify font-open text-[15px] sm:text-base">
            <span>
              Soy un ingeniero de sistemas e informática, apasionado por el
              desarrollo de software y todo lo relacionado con la tecnología.
              Decidí estudiar Ingeniería Informática para profundizar mis
              conocimientos y habilidades, durante mi carrera, descubrí mi
              pasión por el desarrollo de software y comencé a adquirir
              habilidades en lenguajes de programación.
            </span>
            <span>
              Además, disfruto de mi tiempo libre mejorando mis habilidades, así
              como compartir el tiempo con amigos y familia. Me considero una persona sociable
              y me gusta conocer gente nueva.
            </span>
            <span>
              Actualmente, estoy en busca de nuevas oportunidades laborales para
              seguir creciendo en mi carrera profesional y enfrentar nuevos
              desafíos. Me considero un trabajador dedicado, comprometido y
              apasionado por la tecnología y el desarrollo de software.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
