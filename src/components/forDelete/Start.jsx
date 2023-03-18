import AstronautImg from "../assets/astronaut.svg";
import Typical from "react-typical";
import { Link } from "react-router-dom";
import { CloudArrowDownIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";

const Start = () => {
  return (
    <section className="container mx-auto px-4 py-24 lg:px-14 xl:px-44">
      <div className="grid grid-cols-2 gap-7">
        <div className="col-span-2 md:col-span-1 flex flex-col justify-center gap-1">
          <p className="text-2xl font-semibold">Hola, Yo soy <span className="text-3xl text-primary font-semibold font-neo">Nick Macedo👋</span></p>
          <Typical
            steps={[
              "Desarrollador de Software",
              2000,
              "Ingeniero de Sistemas e Informatica",
              2000,
            ]}
            loop={Infinity}
            wrapper="p"
            className="text-4xl text-primary font-bold font-neo"
          />
          <p className="text-lg mt-4 font-open">
            Apasionado por la tecnología🚀👨‍💻, desarrollando soluciones innovadoras, con pasión y dedicación. En busca de nuevos desafíos profesionales.
          </p>
          <div className="mt-7 flex items-center gap-4">
            <Link
              to={"/"}
              className="flex items-center gap-2 px-7 py-2 rounded-lg border-2 border-primary bg-transparent text-lg text-primary font-semibold hover:bg-primary hover:text-white hover:drop-shadow-lg"
            >
              Contactame
              <ChatBubbleLeftRightIcon className="w-6 h-6" />
            </Link>
            <div className="flex items-center gap-2 hover:animate-bounce">
              <Link
                to={"/"}
                className="p-2 rounded-full bg-primary text-white font-semibold "
              >
                <CloudArrowDownIcon className="w-7 h-7 " />
              </Link>
              <p className="text-lg font-semibold">Descargar CV</p>
            </div>
          </div>
        </div>
        <div className="hidden md:-mr-10 md:col-span-1 md:flex justify-center">
          <img className="w-[490px] contrast-[1.2]" src={AstronautImg} />
        </div>
      </div>
    </section>
  );
};

export default Start;
