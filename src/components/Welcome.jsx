import React from "react";
import Typical from "react-typical";
import ConsoleBackEnd from "../assets/images/backend-console.png";
import ConsoleFrontEnd from "../assets/images/frontend-console.png";
import Avatar from "../assets/images/avatar.png";
import BlobOne from "../assets/svg/blob-1.svg";
import BlobTwo from "../assets/svg/blob-2.svg";
import WaveTwo from "../assets/svg/wave-1.svg";

const Welcome = () => {
  return (
    <section className={`px-3 py-16 img-bg-welcome relative overflow-hidden`}>
      <div className="container mx-auto">
        <div className="flex flex-nowrap justify-center items-center">
          <div className="min-w-[600px] max-w-xl flex flex-col gap-3 z-30">
            <div className="text-6xl font-semibold font-neo text-os">
              <p className="w-96">Hi 👋, I'm Nick Macedo</p>
              <Typical
                steps={[
                  "FullStack Developer",
                  2500,
                  "BackEnd Developer",
                  2500,
                  "FrontEnd Developer",
                  2500,
                ]}
                loop={Infinity}
                wrapper="p"
              />
            </div>
            <p className="text-lg font-open">
              Apasionado por la tecnología🚀👨‍💻, desarrollando soluciones
              innovadoras. En busca de nuevos desafíos profesionales.
            </p>
            <div className="flex gap-3 mt-2">
              <button className="rounded-full py-1 px-5 bg-[#4351e8] hover:bg-[#4f65f1] text-white text-lg font-open">
                About Us
              </button>
            </div>
          </div>
          <div className="hidden lg:block lg:-mr-48 lg:-ml-20 xl:ml-0 relative min-w-[650px] min-h-[550px]">
            <img className="absolute top-1 -right-16 " src={BlobTwo} />
            <img className="absolute top-1 -right-16 w-[450px]" src={BlobOne} />
            <img
              className="absolute bottom-10 left-0 w-96 shadow-2xl z-10 rounded-lg hover:p-0.5 hover:border-4 hover:border-[#fa7f98] hover:rotate-[8deg] hover:z-40 transition ease-in-out delay-150 hover:scale-110 duration-700"
              src={ConsoleFrontEnd}
              alt="console backend"
            />
            <img
              className="absolute top-16 right-6 w-96 shadow-2xl rounded-lg hover:p-0.5 hover:border-4 hover:border-[#22cafe] hover:rotate-[-8deg] hover:z-40 transition ease-in-out delay-150 hover:scale-110 duration-700"
              src={ConsoleBackEnd}
              alt="console backend"
            />
            <div className="absolute lg:bottom-6 xl:bottom-16 lg:right-36 xl:right-0 lg:z-20 xl:z-0">
              <img className="w-[250px]" src={Avatar} alt="avatar" />
            </div>
          </div>
        </div>
      </div>
      <img className="absolute w-full bottom-0 left-0 right-0 lg:z-30 xl:z-0" src={WaveTwo} />
    </section>
  );
};

export default Welcome;
