import React from "react";
import BackgroundCard from "./Cards/BackgroundCard";
import {
  CheckBadgeIcon,
  WrenchScrewdriverIcon,
  CodeBracketSquareIcon,
  PuzzlePieceIcon,
} from "@heroicons/react/24/outline";

const Background = () => {
  return (
    <section className="img-bg-background py-28 px-10 text-center">
      <div className="flex flex-col">
        <p className="text-base font-bold font-neo text-[#fa7f98]">
          BACKGROUND
        </p>
        <p className="text-4xl font-bold font-neo text-os">FullStack</p>
      </div>
      <div className="mt-10 flex justify-center gap-10 font-open">
        {/* <div className="p-6 bg-white rounded-xl text-center w-96 drop-shadow-md hover:drop-shadow-2xl"> */}
        <BackgroundCard>
          <div className="flex justify-center">
            <PuzzlePieceIcon className="w-14 h-14 text-os mr-1" />
          </div>
          <p className="mt-3 font-neo font-bold text-lg text-[#4f65f1]">
            FrontEnd
          </p>
          <p className="mt-3">
            Me gusta codificar y disfruto dando vida a las ideas en el
            navegador.
          </p>
          <p className="mt-6 text-[#4f65f1]">Lenguajes:</p>
          <p className="mt-3">JavaScript, HTML, CSS, Sass</p>
          <p className="mt-6 text-[#4f65f1]">Herramientas de Desarrollo:</p>
          <ul className="mt-3">
            <li className="flex items-center ml-24">
              <CheckBadgeIcon className="w-5 h-5 text-green-500 mr-1" />
              React
            </li>
            <li className="flex items-center ml-24">
              <CheckBadgeIcon className="w-5 h-5 text-green-500 mr-1" />
              Redux
            </li>
            <li className="flex items-center ml-24">
              <CheckBadgeIcon className="w-5 h-5 text-green-500 mr-1" />
              Tailwind CSS
            </li>
            <li className="flex items-center ml-24">
              <CheckBadgeIcon className="w-5 h-5 text-green-500 mr-1" />
              Bootstrap
            </li>
            <li className="flex items-center ml-24">
              <CheckBadgeIcon className="w-5 h-5 text-green-500 mr-1" />
              Material UI
            </li>
          </ul>
        </BackgroundCard>
        <BackgroundCard>
          <div className="flex justify-center">
            <CodeBracketSquareIcon className="w-14 h-14 text-os mr-1" />
          </div>
          <p className="mt-3 font-neo font-bold text-lg text-[#4f65f1]">
            BackEnd
          </p>
          <p className="mt-3">
            Me gusta diseñar la estructura de la aplicación, codificando
            procesos de forma eficiente.
          </p>
          <p className="mt-6 text-[#4f65f1]">Lenguajes</p>
          <p className="mt-3">
            Java, NodeJS (TypeScript), SQL (PostgreSQL, MySQL, MariaDB){" "}
          </p>
          <p className="mt-6 text-[#4f65f1]">Herramientas de Desarrollo</p>
          <ul className="mt-3">
            <li className="flex items-center ml-24">
              <CheckBadgeIcon className="w-5 h-5 text-green-500 mr-1" />
              Express
            </li>
            <li className="flex items-center ml-24">
              <CheckBadgeIcon className="w-5 h-5 text-green-500 mr-1" />
              Sequelize
            </li>
            <li className="flex items-center ml-24">
              <CheckBadgeIcon className="w-5 h-5 text-green-500 mr-1" />
              Spring
            </li>
            <li className="flex items-center ml-24">
              <CheckBadgeIcon className="w-5 h-5 text-green-500 mr-1" />
              Git (GitHub, GitLab)
            </li>
            <li className="flex items-center ml-24">
              <WrenchScrewdriverIcon className="w-5 h-5 text-yellow-400 mr-1" />
              Hibernet (Aprendiendo)
            </li>
            <li className="flex items-center ml-24">
              <WrenchScrewdriverIcon className="w-5 h-5 text-yellow-400 mr-1" />
              NestJs (Aprendiendo)
            </li>
          </ul>
        </BackgroundCard>
      </div>
    </section>
  );
};

export default Background;
